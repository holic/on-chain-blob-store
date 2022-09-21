/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IContentStore,
  IContentStoreInterface,
} from "../../ContentStore.sol/IContentStore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "contentSize",
        type: "uint256",
      },
    ],
    name: "NewChecksum",
    type: "event",
  },
];

export class IContentStore__factory {
  static readonly abi = _abi;
  static createInterface(): IContentStoreInterface {
    return new utils.Interface(_abi) as IContentStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IContentStore {
    return new Contract(address, _abi, signerOrProvider) as IContentStore;
  }
}
