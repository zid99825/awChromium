// FileSystemAccessTransferToken_Internal.java is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/file_system_access/file_system_access_transfer_token.mojom
//
package org.chromium.blink.mojom

import org.chromium.blink.mojom.FileSystemAccessTransferToken.GetInternalIdResponse
import org.chromium.mojo.bindings.DataHeader
import org.chromium.mojo.bindings.Decoder
import org.chromium.mojo.bindings.DeserializationException
import org.chromium.mojo.bindings.Encoder
import org.chromium.mojo.bindings.Interface
import org.chromium.mojo.bindings.Interface.AbstractProxy
import org.chromium.mojo.bindings.Interface.Manager
import org.chromium.mojo.bindings.InterfaceControlMessagesHelper
import org.chromium.mojo.bindings.InterfaceRequest
import org.chromium.mojo.bindings.Message
import org.chromium.mojo.bindings.MessageHeader
import org.chromium.mojo.bindings.MessageReceiver
import org.chromium.mojo.bindings.MessageReceiverWithResponder
import org.chromium.mojo.bindings.SideEffectFreeCloseable
import org.chromium.mojo.bindings.Struct
import org.chromium.mojo.bindings.interfacecontrol.InterfaceControlMessagesConstants
import org.chromium.mojo.system.Core
import org.chromium.mojo_base.mojom.UnguessableToken
import java.nio.ByteBuffer

internal object FileSystemAccessTransferToken_Internal {
    val MANAGER: Manager<FileSystemAccessTransferToken?, FileSystemAccessTransferToken.Proxy?> =
        object : Manager<FileSystemAccessTransferToken?, FileSystemAccessTransferToken.Proxy?>() {
            override fun getName(): String {
                return "blink.mojom.FileSystemAccessTransferToken"
            }

            override fun getVersion(): Int {
                return 0
            }

            public override fun buildProxy(
                core: Core,
                messageReceiver: MessageReceiverWithResponder
            ): Proxy {
                return Proxy(core, messageReceiver)
            }

            override fun buildStub(
                core: Core?,
                impl: FileSystemAccessTransferToken?
            ): Interface.Stub<FileSystemAccessTransferToken?> {
                return Stub(core, impl)
            }

            public override fun buildArray(size: Int): Array<FileSystemAccessTransferToken?> {
                return arrayOfNulls(size)
            }
        }
    private const val GET_INTERNAL_ID_ORDINAL = 0
    private const val CLONE_ORDINAL = 1

    internal class Proxy(
        core: Core?,
        messageReceiver: MessageReceiverWithResponder?
    ) : AbstractProxy(core, messageReceiver), FileSystemAccessTransferToken.Proxy {
        override fun getInternalId(
            callback: GetInternalIdResponse
        ) {
            val _message = FileSystemAccessTransferTokenGetInternalIdParams()
            proxyHandler.messageReceiver.acceptWithResponder(
                _message.serializeWithHeader(
                    proxyHandler.core,
                    MessageHeader(
                        GET_INTERNAL_ID_ORDINAL,
                        MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG,
                        0
                    )
                ),
                FileSystemAccessTransferTokenGetInternalIdResponseParamsForwardToCallback(callback)
            )
        }

        override fun clone(
            tokenClone: InterfaceRequest<FileSystemAccessTransferToken>?
        ) {
            val _message = FileSystemAccessTransferTokenCloneParams()
            _message.tokenClone = tokenClone
            proxyHandler.messageReceiver.accept(
                _message.serializeWithHeader(
                    proxyHandler.core,
                    MessageHeader(CLONE_ORDINAL)
                )
            )
        }
    }

    internal class Stub(core: Core?, impl: FileSystemAccessTransferToken?) :
        Interface.Stub<FileSystemAccessTransferToken?>(core, impl) {
        override fun accept(message: Message): Boolean {
            return try {
                val messageWithHeader = message.asServiceMessage()
                val header = messageWithHeader.header
                var flags = MessageHeader.NO_FLAG
                if (header.hasFlag(MessageHeader.MESSAGE_IS_SYNC_FLAG)) {
                    flags = flags or MessageHeader.MESSAGE_IS_SYNC_FLAG
                }
                if (!header.validateHeader(flags)) {
                    return false
                }
                when (header.type) {
                    InterfaceControlMessagesConstants.RUN_OR_CLOSE_PIPE_MESSAGE_ID -> InterfaceControlMessagesHelper.handleRunOrClosePipe(
                        MANAGER, messageWithHeader
                    )

                    CLONE_ORDINAL -> {
                        val data =
                            FileSystemAccessTransferTokenCloneParams.deserialize(messageWithHeader.payload)
                        impl!!.clone(data!!.tokenClone)
                        true
                    }

                    else -> false
                }
            } catch (e: DeserializationException) {
                System.err.println(e)
                false
            }
        }

        override fun acceptWithResponder(message: Message, receiver: MessageReceiver): Boolean {
            return try {
                val messageWithHeader = message.asServiceMessage()
                val header = messageWithHeader.header
                var flags = MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG
                if (header.hasFlag(MessageHeader.MESSAGE_IS_SYNC_FLAG)) {
                    flags = flags or MessageHeader.MESSAGE_IS_SYNC_FLAG
                }
                if (!header.validateHeader(flags)) {
                    return false
                }
                when (header.type) {
                    InterfaceControlMessagesConstants.RUN_MESSAGE_ID -> InterfaceControlMessagesHelper.handleRun(
                        core, MANAGER, messageWithHeader, receiver
                    )

                    GET_INTERNAL_ID_ORDINAL -> {
                        FileSystemAccessTransferTokenGetInternalIdParams.deserialize(
                            messageWithHeader.payload
                        )
                        impl!!.getInternalId(
                            FileSystemAccessTransferTokenGetInternalIdResponseParamsProxyToResponder(
                                core, receiver, header.requestId
                            )
                        )
                        true
                    }

                    else -> false
                }
            } catch (e: DeserializationException) {
                System.err.println(e)
                false
            }
        }
    }

    internal class FileSystemAccessTransferTokenGetInternalIdParams private constructor(version: Int) :
        Struct(
            STRUCT_SIZE, version
        ) {
        constructor() : this(0)

        override fun encode(encoder: Encoder) {
            encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
        }

        companion object {
            private const val STRUCT_SIZE = 8
            private val VERSION_ARRAY = arrayOf(DataHeader(8, 0))
            private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
            fun deserialize(message: Message?): FileSystemAccessTransferTokenGetInternalIdParams? {
                return decode(Decoder(message))
            }

            /**
             * Similar to the method above, but deserializes from a |ByteBuffer| instance.
             *
             * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
             */
            fun deserialize(data: ByteBuffer?): FileSystemAccessTransferTokenGetInternalIdParams? {
                return deserialize(
                    Message(
                        data, ArrayList()
                    )
                )
            }

            fun decode(decoder0: Decoder?): FileSystemAccessTransferTokenGetInternalIdParams? {
                if (decoder0 == null) {
                    return null
                }
                decoder0.increaseStackDepth()
                val result: FileSystemAccessTransferTokenGetInternalIdParams
                result = try {
                    val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                    val elementsOrVersion = mainDataHeader.elementsOrVersion
                    FileSystemAccessTransferTokenGetInternalIdParams(elementsOrVersion)
                } finally {
                    decoder0.decreaseStackDepth()
                }
                return result
            }
        }
    }

    internal class FileSystemAccessTransferTokenGetInternalIdResponseParams private constructor(
        version: Int
    ) : Struct(
        STRUCT_SIZE, version
    ) {
        var id: UnguessableToken? = null

        constructor() : this(0)

        override fun encode(encoder: Encoder) {
            val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
            encoder0.encode(id, 8, false)
        }

        companion object {
            private const val STRUCT_SIZE = 16
            private val VERSION_ARRAY = arrayOf(DataHeader(16, 0))
            private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
            fun deserialize(message: Message?): FileSystemAccessTransferTokenGetInternalIdResponseParams? {
                return decode(Decoder(message))
            }

            /**
             * Similar to the method above, but deserializes from a |ByteBuffer| instance.
             *
             * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
             */
            fun deserialize(data: ByteBuffer?): FileSystemAccessTransferTokenGetInternalIdResponseParams? {
                return deserialize(
                    Message(
                        data, ArrayList()
                    )
                )
            }

            fun decode(decoder0: Decoder?): FileSystemAccessTransferTokenGetInternalIdResponseParams? {
                if (decoder0 == null) {
                    return null
                }
                decoder0.increaseStackDepth()
                val result: FileSystemAccessTransferTokenGetInternalIdResponseParams
                try {
                    val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                    val elementsOrVersion = mainDataHeader.elementsOrVersion
                    result =
                        FileSystemAccessTransferTokenGetInternalIdResponseParams(elementsOrVersion)
                    run {
                        val decoder1 = decoder0.readPointer(8, false)
                        result.id = UnguessableToken.decode(decoder1)
                    }
                } finally {
                    decoder0.decreaseStackDepth()
                }
                return result
            }
        }
    }

    internal class FileSystemAccessTransferTokenGetInternalIdResponseParamsForwardToCallback(private val mCallback: GetInternalIdResponse) :
        SideEffectFreeCloseable(), MessageReceiver {
        override fun accept(message: Message): Boolean {
            return try {
                val messageWithHeader = message.asServiceMessage()
                val header = messageWithHeader.header
                if (!header.validateHeader(
                        GET_INTERNAL_ID_ORDINAL,
                        MessageHeader.MESSAGE_IS_RESPONSE_FLAG
                    )
                ) {
                    return false
                }
                val response = FileSystemAccessTransferTokenGetInternalIdResponseParams.deserialize(
                    messageWithHeader.payload
                )
                mCallback.call(response!!.id)
                true
            } catch (e: DeserializationException) {
                false
            }
        }
    }

    internal class FileSystemAccessTransferTokenGetInternalIdResponseParamsProxyToResponder(
        private val mCore: Core,
        private val mMessageReceiver: MessageReceiver,
        private val mRequestId: Long
    ) : GetInternalIdResponse {
        override fun call(id: UnguessableToken?) {
            val _response = FileSystemAccessTransferTokenGetInternalIdResponseParams()
            _response.id = id
            val _message = _response.serializeWithHeader(
                mCore,
                MessageHeader(
                    GET_INTERNAL_ID_ORDINAL,
                    MessageHeader.MESSAGE_IS_RESPONSE_FLAG,
                    mRequestId
                )
            )
            mMessageReceiver.accept(_message)
        }
    }

    internal class FileSystemAccessTransferTokenCloneParams private constructor(version: Int) :
        Struct(
            STRUCT_SIZE, version
        ) {
        var tokenClone: InterfaceRequest<FileSystemAccessTransferToken>? = null

        constructor() : this(0)

        override fun encode(encoder: Encoder) {
            val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
            encoder0.encode(tokenClone, 8, false)
        }

        companion object {
            private const val STRUCT_SIZE = 16
            private val VERSION_ARRAY = arrayOf(DataHeader(16, 0))
            private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
            fun deserialize(message: Message?): FileSystemAccessTransferTokenCloneParams? {
                return decode(Decoder(message))
            }

            /**
             * Similar to the method above, but deserializes from a |ByteBuffer| instance.
             *
             * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
             */
            fun deserialize(data: ByteBuffer?): FileSystemAccessTransferTokenCloneParams? {
                return deserialize(
                    Message(
                        data, ArrayList()
                    )
                )
            }

            fun decode(decoder0: Decoder?): FileSystemAccessTransferTokenCloneParams? {
                if (decoder0 == null) {
                    return null
                }
                decoder0.increaseStackDepth()
                val result: FileSystemAccessTransferTokenCloneParams
                try {
                    val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                    val elementsOrVersion = mainDataHeader.elementsOrVersion
                    result = FileSystemAccessTransferTokenCloneParams(elementsOrVersion)
                    run { result.tokenClone = decoder0.readInterfaceRequest(8, false) }
                } finally {
                    decoder0.decreaseStackDepth()
                }
                return result
            }
        }
    }
}