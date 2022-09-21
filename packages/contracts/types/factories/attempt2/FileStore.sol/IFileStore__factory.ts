/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFileStore,
  IFileStoreInterface,
} from "../../../attempt2/FileStore.sol/IFileStore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "filename",
        type: "string",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "contentType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "contentEncoding",
        type: "string",
      },
    ],
    name: "FileCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "FileDeleted",
    type: "event",
  },
];

export class IFileStore__factory {
  static readonly abi = _abi;
  static createInterface(): IFileStoreInterface {
    return new utils.Interface(_abi) as IFileStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFileStore {
    return new Contract(address, _abi, signerOrProvider) as IFileStore;
  }
}
