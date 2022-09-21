// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import {Ownable2Step} from "openzeppelin/access/Ownable2Step.sol";
import {File} from "./File.sol";
import {FileWriter} from "./FileWriter.sol";
import {FileReader} from "./FileReader.sol";

interface IFileStore {
    event FileCreated(
        string indexed filename,
        bytes32 indexed checksum,
        uint256 size,
        string contentType,
        string contentEncoding
    );
    event FileDeleted(string indexed filename);
}

contract FileStore is IFileStore, Ownable2Step {
    // filename => File checksum
    mapping(string => bytes32) public files;
    string[] public filenames;

    error FileNotFound();
    error FilenameExists();

    function fileExists(string memory filename) public view returns (bool) {
        return files[filename] != bytes32(0);
    }

    function readFile(string memory filename)
        public
        view
        returns (File memory file)
    {
        bytes32 checksum = files[filename];
        if (checksum == bytes32(0)) {
            revert FileNotFound();
        }
        return FileReader.readFile(checksum);
    }

    function readFileData(string memory filename)
        public
        view
        returns (bytes memory data)
    {
        File memory file = readFile(filename);
        return FileReader.readFileData(file);
    }

    function createFile(
        string memory filename,
        string memory contentType,
        string memory contentEncoding,
        bytes32[] memory checksums
    ) public {
        if (files[filename] != bytes32(0)) {
            revert FilenameExists();
        }
        return _createFile(filename, contentType, contentEncoding, checksums);
    }

    function _createFile(
        string memory filename,
        string memory contentType,
        string memory contentEncoding,
        bytes32[] memory checksums
    ) private {
        (bytes32 checksum, File memory file) = FileWriter.writeFile(
            contentType,
            contentEncoding,
            checksums
        );
        files[filename] = checksum;
        filenames.push(filename);
        emit FileCreated(
            filename,
            checksum,
            file.size,
            file.contentType,
            file.contentEncoding
        );
    }

    function deleteFile(string memory filename) public onlyOwner {
        delete files[filename];
        emit FileDeleted(filename);
    }
}
