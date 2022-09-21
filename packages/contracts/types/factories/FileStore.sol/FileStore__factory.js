"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStore__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "ChunkExists",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "ChunkNotFound",
        type: "error",
    },
    {
        inputs: [],
        name: "ChunkTooBig",
        type: "error",
    },
    {
        inputs: [],
        name: "EmptyFile",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_size",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_start",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_end",
                type: "uint256",
            },
        ],
        name: "InvalidCodeAtRange",
        type: "error",
    },
    {
        inputs: [],
        name: "WriteError",
        type: "error",
    },
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
                name: "size",
                type: "uint256",
            },
        ],
        name: "NewChunk",
        type: "event",
    },
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
        name: "NewFile",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "_checksums",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "_chunks",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "checksumExists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "chunkSize",
        outputs: [
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "getPointer",
        outputs: [
            {
                internalType: "address",
                name: "pointer",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "checksums",
                type: "bytes32[]",
            },
        ],
        name: "getPointers",
        outputs: [
            {
                internalType: "address[]",
                name: "pointers",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "size",
                type: "uint256",
            },
            {
                internalType: "bytes32[]",
                name: "checksums",
                type: "bytes32[]",
            },
        ],
        name: "readBytes",
        outputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "readChunk",
        outputs: [
            {
                internalType: "bytes",
                name: "chunk",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "checksums",
                type: "bytes32[]",
            },
        ],
        name: "readChunks",
        outputs: [
            {
                internalType: "bytes[]",
                name: "chunks",
                type: "bytes[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "readFile",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "size",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "contentType",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "contentEncoding",
                        type: "string",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "checksums",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct File",
                name: "file",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "size",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "contentType",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "contentEncoding",
                        type: "string",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "checksums",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct File",
                name: "file",
                type: "tuple",
            },
        ],
        name: "readFileData",
        outputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "readFileData",
        outputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "pointer",
                type: "address",
            },
        ],
        name: "writeChunk",
        outputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "chunk",
                type: "bytes",
            },
        ],
        name: "writeChunk",
        outputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes[]",
                name: "chunks",
                type: "bytes[]",
            },
        ],
        name: "writeChunks",
        outputs: [
            {
                internalType: "bytes32[]",
                name: "checksums",
                type: "bytes32[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "pointers",
                type: "address[]",
            },
        ],
        name: "writeChunks",
        outputs: [
            {
                internalType: "bytes32[]",
                name: "checksums",
                type: "bytes32[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "contentType",
                type: "string",
            },
            {
                internalType: "string",
                name: "contentEncoding",
                type: "string",
            },
            {
                internalType: "bytes32[]",
                name: "checksums",
                type: "bytes32[]",
            },
        ],
        name: "writeFile",
        outputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "size",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "contentType",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "contentEncoding",
                        type: "string",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "checksums",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct File",
                name: "file",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "contentType",
                type: "string",
            },
            {
                internalType: "string",
                name: "contentEncoding",
                type: "string",
            },
            {
                internalType: "bytes[]",
                name: "chunks",
                type: "bytes[]",
            },
        ],
        name: "writeFile",
        outputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "size",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "contentType",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "contentEncoding",
                        type: "string",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "checksums",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct File",
                name: "file",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061176b806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063746da1e7116100a2578063a1eb26f311610071578063a1eb26f314610288578063bea751f41461029b578063cb470803146102bb578063cdfcc504146102db578063f97406f7146102ee57600080fd5b8063746da1e71461022f57806386cbfc7c14610242578063957c28d71461025557806396a480ed1461026857600080fd5b80632ca30cc5116100e95780632ca30cc5146101b55780633a72a9c4146101d65780634641dce6146101f65780634cfbb2de146102095780636fba0bf51461021c57600080fd5b806305c1deda1461011b5780631a49cfca146101615780631c2414d414610181578063266c235a14610194575b600080fd5b610144610129366004610d70565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61017461016f366004610efd565b610329565b6040516101589190611013565b61017461018f366004610d70565b610343565b6101a76101a2366004611026565b6103a4565b604051610158929190611128565b6101c86101c3366004611165565b6104de565b604051908152602001610158565b6101e96101e4366004610d70565b6105cf565b6040516101589190611180565b610144610204366004610d70565b610616565b610174610217366004610d70565b61066a565b6101c861022a366004611193565b610678565b61017461023d3660046111c7565b61077d565b6101a761025036600461128c565b6107f8565b6101c8610263366004610d70565b61083f565b61027b610276366004611309565b61089c565b604051610158919061133d565b6101c8610296366004610d70565b610953565b6102ae6102a936600461138a565b610974565b60405161015891906113be565b6102ce6102c9366004611309565b610a18565b60405161015891906113f6565b6102ae6102e9366004611458565b610aba565b6103196102fc366004610d70565b6000908152602081905260409020546001600160a01b0316151590565b6040519015158152602001610158565b606061033d8260000151836060015161077d565b92915050565b6000818152602081905260409020546060906001600160a01b0316610383576040516316fcd95f60e11b8152600481018390526024015b60405180910390fd5b60008281526020819052604090205461033d906001600160a01b0316610b5e565b60006103d16040518060800160405280600081526020016060815260200160608152602001606081525090565b6000805b845181101561041e576104008582815181106103f3576103f36114ef565b602002602001015161083f565b61040a908361151b565b91508061041681611533565b9150506103d5565b50806000036104405760405163067b6a0f60e01b815260040160405180910390fd5b604051806080016040528082815260200187815260200186815260200185815250915061048b826040516020016104779190611180565b604051602081830303815290604052610678565b9250827f781d09314f163fac6f270ad8ff8282008540d3ce7baccdafa9dbbc1fea63eb248360000151846020015185604001516040516104cd9392919061154c565b60405180910390a250935093915050565b60006104e982610b5e565b80516020918201206000818152918290526040909120549091506001600160a01b03161561052d57604051634fd1e20760e01b81526004810182905260240161037a565b600081815260208190526040812080546001600160a01b0319166001600160a01b038516179055600180548082018255918190527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf690910182905581907f277eb4123d86c9731f85aaee94623cc5ac9b8e1f593faa1e2bc1a3aa2d27d77290843b6105b89190611581565b6040519081526020015b60405180910390a2919050565b6105fa6040518060800160405280600081526020016060815260200160608152602001606081525090565b61060382610343565b80602001905181019061033d9190611638565b6000818152602081905260408120546001600160a01b031661064e576040516316fcd95f60e11b81526004810183905260240161037a565b506000908152602081905260409020546001600160a01b031690565b606061033d61016f836105cf565b6000615fff8251111561069e576040516388c92e2760e01b815260040160405180910390fd5b5080516020808301919091206000818152918290526040909120546001600160a01b0316156106e357604051634fd1e20760e01b81526004810182905260240161037a565b6106ec82610b6e565b60008281526020818152604080832080546001600160a01b0319166001600160a01b03959095169490941790935560018054808201825592527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69091018390558351915191825282917f277eb4123d86c9731f85aaee94623cc5ac9b8e1f593faa1e2bc1a3aa2d27d77291016105c2565b60606107a083604080518281016060018252910181526000602090910190815290565b905060005b82518110156107f15760006107d28483815181106107c5576107c56114ef565b6020026020010151610343565b90506107de8382610bcd565b50806107e981611533565b9150506107a5565b5092915050565b60006108256040518060800160405280600081526020016060815260200160608152602001606081525090565b61083385856101a286610974565b91509150935093915050565b6000818152602081905260408120546001600160a01b0316610877576040516316fcd95f60e11b81526004810183905260240161037a565b60008281526020819052604090205461033d906001906001600160a01b03163b611581565b606081516001600160401b038111156108b7576108b7610d89565b6040519080825280602002602001820160405280156108e0578160200160208202803683370190505b50905060005b825181101561094d57610911838281518110610904576109046114ef565b6020026020010151610616565b828281518110610923576109236114ef565b6001600160a01b03909216602092830291909101909101528061094581611533565b9150506108e6565b50919050565b6001818154811061096357600080fd5b600091825260209091200154905081565b606081516001600160401b0381111561098f5761098f610d89565b6040519080825280602002602001820160405280156109b8578160200160208202803683370190505b50905060005b825181101561094d576109e98382815181106109dc576109dc6114ef565b6020026020010151610678565b8282815181106109fb576109fb6114ef565b602090810291909101015280610a1081611533565b9150506109be565b606081516001600160401b03811115610a3357610a33610d89565b604051908082528060200260200182016040528015610a6657816020015b6060815260200190600190039081610a515790505b50905060005b825181101561094d57610a8a8382815181106107c5576107c56114ef565b828281518110610a9c57610a9c6114ef565b60200260200101819052508080610ab290611533565b915050610a6c565b606081516001600160401b03811115610ad557610ad5610d89565b604051908082528060200260200182016040528015610afe578160200160208202803683370190505b50905060005b825181101561094d57610b2f838281518110610b2257610b226114ef565b60200260200101516104de565b828281518110610b4157610b416114ef565b602090810291909101015280610b5681611533565b915050610b04565b606061033d826001600019610c58565b600080610b9983604051602001610b8591906116e7565b604051602081830303815290604052610d0e565b90508051602082016000f091506001600160a01b03821661094d5760405163046a55db60e11b815260040160405180910390fd5b601f1982015182518251603f19909201918290610bea908361151b565b1115610c485760405162461bcd60e51b815260206004820152602760248201527f44796e616d69634275666665723a20417070656e64696e67206f7574206f66206044820152663137bab732399760c91b606482015260840161037a565b610c528484610d3a565b50505050565b6060833b6000819003610c7b575050604080516020810190915260008152610d07565b80841115610c99575050604080516020810190915260008152610d07565b83831015610ccb5760405163162544fd60e11b815260048101829052602481018590526044810184905260640161037a565b8383038482036000828210610ce05782610ce2565b815b60408051603f8301601f19168101909152818152955090508087602087018a3c505050505b9392505050565b6060815182604051602001610d2492919061170d565b6040516020818303038152906040529050919050565b8051602082019150808201602084510184015b81841015610d65578351815260209384019301610d4d565b505082510190915250565b600060208284031215610d8257600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715610dc157610dc1610d89565b60405290565b604051601f8201601f191681016001600160401b0381118282101715610def57610def610d89565b604052919050565b60006001600160401b03821115610e1057610e10610d89565b50601f01601f191660200190565b600082601f830112610e2f57600080fd5b8135610e42610e3d82610df7565b610dc7565b818152846020838601011115610e5757600080fd5b816020850160208301376000918101602001919091529392505050565b60006001600160401b03821115610e8d57610e8d610d89565b5060051b60200190565b600082601f830112610ea857600080fd5b81356020610eb8610e3d83610e74565b82815260059290921b84018101918181019086841115610ed757600080fd5b8286015b84811015610ef25780358352918301918301610edb565b509695505050505050565b600060208284031215610f0f57600080fd5b81356001600160401b0380821115610f2657600080fd5b9083019060808286031215610f3a57600080fd5b610f42610d9f565b82358152602083013582811115610f5857600080fd5b610f6487828601610e1e565b602083015250604083013582811115610f7c57600080fd5b610f8887828601610e1e565b604083015250606083013582811115610fa057600080fd5b610fac87828601610e97565b60608301525095945050505050565b60005b83811015610fd6578181015183820152602001610fbe565b83811115610c525750506000910152565b60008151808452610fff816020860160208601610fbb565b601f01601f19169290920160200192915050565b602081526000610d076020830184610fe7565b60008060006060848603121561103b57600080fd5b83356001600160401b038082111561105257600080fd5b61105e87838801610e1e565b9450602086013591508082111561107457600080fd5b61108087838801610e1e565b9350604086013591508082111561109657600080fd5b506110a386828701610e97565b9150509250925092565b8051825260006020808301516080828601526110cc6080860182610fe7565b9050604084015185820360408701526110e58282610fe7565b606086810151888303918901919091528051808352908501935060009250908401905b80831015610ef25783518252928401926001929092019190840190611108565b82815260406020820152600061114160408301846110ad565b949350505050565b80356001600160a01b038116811461116057600080fd5b919050565b60006020828403121561117757600080fd5b610d0782611149565b602081526000610d0760208301846110ad565b6000602082840312156111a557600080fd5b81356001600160401b038111156111bb57600080fd5b61114184828501610e1e565b600080604083850312156111da57600080fd5b8235915060208301356001600160401b038111156111f757600080fd5b61120385828601610e97565b9150509250929050565b600082601f83011261121e57600080fd5b8135602061122e610e3d83610e74565b82815260059290921b8401810191818101908684111561124d57600080fd5b8286015b84811015610ef25780356001600160401b038111156112705760008081fd5b61127e8986838b0101610e1e565b845250918301918301611251565b6000806000606084860312156112a157600080fd5b83356001600160401b03808211156112b857600080fd5b6112c487838801610e1e565b945060208601359150808211156112da57600080fd5b6112e687838801610e1e565b935060408601359150808211156112fc57600080fd5b506110a38682870161120d565b60006020828403121561131b57600080fd5b81356001600160401b0381111561133157600080fd5b61114184828501610e97565b6020808252825182820181905260009190848201906040850190845b8181101561137e5783516001600160a01b031683529284019291840191600101611359565b50909695505050505050565b60006020828403121561139c57600080fd5b81356001600160401b038111156113b257600080fd5b6111418482850161120d565b6020808252825182820181905260009190848201906040850190845b8181101561137e578351835292840192918401916001016113da565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561144b57603f19888603018452611439858351610fe7565b9450928501929085019060010161141d565b5092979650505050505050565b6000602080838503121561146b57600080fd5b82356001600160401b0381111561148157600080fd5b8301601f8101851361149257600080fd5b80356114a0610e3d82610e74565b81815260059190911b820183019083810190878311156114bf57600080fd5b928401925b828410156114e4576114d584611149565b825292840192908401906114c4565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561152e5761152e611505565b500190565b60006001820161154557611545611505565b5060010190565b8381526060602082015260006115656060830185610fe7565b82810360408401526115778185610fe7565b9695505050505050565b60008282101561159357611593611505565b500390565b600082601f8301126115a957600080fd5b81516115b7610e3d82610df7565b8181528460208386010111156115cc57600080fd5b611141826020830160208701610fbb565b600082601f8301126115ee57600080fd5b815160206115fe610e3d83610e74565b82815260059290921b8401810191818101908684111561161d57600080fd5b8286015b84811015610ef25780518352918301918301611621565b60006020828403121561164a57600080fd5b81516001600160401b038082111561166157600080fd5b908301906080828603121561167557600080fd5b61167d610d9f565b8251815260208301518281111561169357600080fd5b61169f87828601611598565b6020830152506040830151828111156116b757600080fd5b6116c387828601611598565b6040830152506060830151828111156116db57600080fd5b610fac878286016115dd565b6000815260008251611700816001850160208701610fbb565b9190910160010192915050565b606360f81b815260e083901b6001600160e01b03191660018201526880600e6000396000f360b81b6005820152815160009061175081600e850160208701610fbb565b91909101600e01939250505056fea164736f6c634300080d000a";
const isSuperArgs = (xs) => xs.length > 1;
class FileStore__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FileStore__factory = FileStore__factory;
FileStore__factory.bytecode = _bytecode;
FileStore__factory.abi = _abi;
