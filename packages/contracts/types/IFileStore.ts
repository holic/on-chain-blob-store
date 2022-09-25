/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type ContentStruct = {
  checksum: PromiseOrValue<BytesLike>;
  pointer: PromiseOrValue<string>;
};

export type ContentStructOutput = [string, string] & {
  checksum: string;
  pointer: string;
};

export type FileStruct = {
  size: PromiseOrValue<BigNumberish>;
  contents: ContentStruct[];
};

export type FileStructOutput = [BigNumber, ContentStructOutput[]] & {
  size: BigNumber;
  contents: ContentStructOutput[];
};

export interface IFileStoreInterface extends utils.Interface {
  functions: {
    "contentStore()": FunctionFragment;
    "createFile(string,bytes32[])": FunctionFragment;
    "createFile(string,bytes32[],bytes)": FunctionFragment;
    "deleteFile(string)": FunctionFragment;
    "fileExists(string)": FunctionFragment;
    "files(string)": FunctionFragment;
    "getChecksum(string)": FunctionFragment;
    "getFile(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "contentStore"
      | "createFile(string,bytes32[])"
      | "createFile(string,bytes32[],bytes)"
      | "deleteFile"
      | "fileExists"
      | "files"
      | "getChecksum"
      | "getFile"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contentStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createFile(string,bytes32[])",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createFile(string,bytes32[],bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteFile",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fileExists",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "files",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getChecksum",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFile",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "contentStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFile(string,bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFile(string,bytes32[],bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deleteFile", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fileExists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "files", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getChecksum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFile", data: BytesLike): Result;

  events: {
    "FileCreated(string,bytes32,uint256,bytes)": EventFragment;
    "FileDeleted(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FileCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FileDeleted"): EventFragment;
}

export interface FileCreatedEventObject {
  filename: string;
  checksum: string;
  size: BigNumber;
  metadata: string;
}
export type FileCreatedEvent = TypedEvent<
  [string, string, BigNumber, string],
  FileCreatedEventObject
>;

export type FileCreatedEventFilter = TypedEventFilter<FileCreatedEvent>;

export interface FileDeletedEventObject {
  filename: string;
}
export type FileDeletedEvent = TypedEvent<[string], FileDeletedEventObject>;

export type FileDeletedEventFilter = TypedEventFilter<FileDeletedEvent>;

export interface IFileStore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFileStoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    contentStore(overrides?: CallOverrides): Promise<[string]>;

    "createFile(string,bytes32[])"(
      filename: PromiseOrValue<string>,
      checksums: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "createFile(string,bytes32[],bytes)"(
      filename: PromiseOrValue<string>,
      checksums: PromiseOrValue<BytesLike>[],
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteFile(
      filename: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fileExists(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    files(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { checksum: string }>;

    getChecksum(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { checksum: string }>;

    getFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[FileStructOutput] & { file: FileStructOutput }>;
  };

  contentStore(overrides?: CallOverrides): Promise<string>;

  "createFile(string,bytes32[])"(
    filename: PromiseOrValue<string>,
    checksums: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "createFile(string,bytes32[],bytes)"(
    filename: PromiseOrValue<string>,
    checksums: PromiseOrValue<BytesLike>[],
    extraData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteFile(
    filename: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fileExists(
    filename: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  files(
    filename: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getChecksum(
    filename: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getFile(
    filename: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<FileStructOutput>;

  callStatic: {
    contentStore(overrides?: CallOverrides): Promise<string>;

    "createFile(string,bytes32[])"(
      filename: PromiseOrValue<string>,
      checksums: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<FileStructOutput>;

    "createFile(string,bytes32[],bytes)"(
      filename: PromiseOrValue<string>,
      checksums: PromiseOrValue<BytesLike>[],
      extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<FileStructOutput>;

    deleteFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fileExists(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    files(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getChecksum(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<FileStructOutput>;
  };

  filters: {
    "FileCreated(string,bytes32,uint256,bytes)"(
      filename?: PromiseOrValue<string> | null,
      checksum?: PromiseOrValue<BytesLike> | null,
      size?: null,
      metadata?: null
    ): FileCreatedEventFilter;
    FileCreated(
      filename?: PromiseOrValue<string> | null,
      checksum?: PromiseOrValue<BytesLike> | null,
      size?: null,
      metadata?: null
    ): FileCreatedEventFilter;

    "FileDeleted(string)"(
      filename?: PromiseOrValue<string> | null
    ): FileDeletedEventFilter;
    FileDeleted(
      filename?: PromiseOrValue<string> | null
    ): FileDeletedEventFilter;
  };

  estimateGas: {
    contentStore(overrides?: CallOverrides): Promise<BigNumber>;

    "createFile(string,bytes32[])"(
      filename: PromiseOrValue<string>,
      checksums: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "createFile(string,bytes32[],bytes)"(
      filename: PromiseOrValue<string>,
      checksums: PromiseOrValue<BytesLike>[],
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteFile(
      filename: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fileExists(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    files(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getChecksum(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    contentStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "createFile(string,bytes32[])"(
      filename: PromiseOrValue<string>,
      checksums: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "createFile(string,bytes32[],bytes)"(
      filename: PromiseOrValue<string>,
      checksums: PromiseOrValue<BytesLike>[],
      extraData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteFile(
      filename: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fileExists(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    files(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChecksum(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFile(
      filename: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
