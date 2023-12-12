// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.22;

import {SSTORE2} from "solady/utils/SSTORE2.sol";
import {IFileStore} from "./IFileStore.sol";
import {IContentStore} from "./IContentStore.sol";

// Convenience methods to call from a frontend or indexer, where they would
// otherwise be too gas heavy for another contract.

contract FileStoreFrontend {
    function readFile(
        IFileStore fileStore,
        string memory filename
    ) public view returns (string memory contents) {
        return fileStore.getFile(filename).read();
    }
}
