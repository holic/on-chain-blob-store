/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ContentStoreRegistry,
  ContentStoreRegistryInterface,
} from "../ContentStoreRegistry";

const _abi = [
  {
    inputs: [],
    name: "ChainNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "getStore",
    outputs: [
      {
        internalType: "contract ContentStore",
        name: "",
        type: "ContentStore",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a1610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063c2722ecc146038575b600080fd5b603e605a565b6040516001600160a01b03909116815260200160405180910390f35b6000466001819003606d57600091505090565b507f72e1d468e3ab07cc77731310b6c8dd5256e97c3128b5ba2e2093c0d747b9a35c91905056fea164736f6c634300080d000a";

type ContentStoreRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContentStoreRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContentStoreRegistry__factory extends ContractFactory {
  constructor(...args: ContentStoreRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContentStoreRegistry> {
    return super.deploy(overrides || {}) as Promise<ContentStoreRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ContentStoreRegistry {
    return super.attach(address) as ContentStoreRegistry;
  }
  override connect(signer: Signer): ContentStoreRegistry__factory {
    return super.connect(signer) as ContentStoreRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContentStoreRegistryInterface {
    return new utils.Interface(_abi) as ContentStoreRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContentStoreRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ContentStoreRegistry;
  }
}
