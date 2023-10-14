// RemoteObjectHost_Internal.java is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/remote_objects/remote_objects.mojom
//
package org.chromium.blink.mojom

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
import org.chromium.mojo.bindings.Struct
import org.chromium.mojo.bindings.interfacecontrol.InterfaceControlMessagesConstants
import org.chromium.mojo.system.Core
import java.nio.ByteBuffer

internal object RemoteObjectHostInternal {
    val MANAGER: Manager<RemoteObjectHost?, RemoteObjectHost.Proxy?> =
        object : Manager<RemoteObjectHost?, RemoteObjectHost.Proxy?>() {
            override fun getName(): String {
                return "blink.mojom.RemoteObjectHost"
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
                impl: RemoteObjectHost?
            ): Interface.Stub<RemoteObjectHost?> {
                return Stub(core, impl)
            }

            public override fun buildArray(size: Int): Array<RemoteObjectHost?> {
                return arrayOfNulls(size)
            }
        }
    private const val GET_OBJECT_ORDINAL = 0
    private const val ACQUIRE_OBJECT_ORDINAL = 1
    private const val RELEASE_OBJECT_ORDINAL = 2

    internal class Proxy(
        core: Core?,
        messageReceiver: MessageReceiverWithResponder?
    ) : AbstractProxy(core, messageReceiver), RemoteObjectHost.Proxy {
        override fun getObject(
            objectId: Int, receiver: InterfaceRequest<RemoteObject>?
        ) {
            val _message = RemoteObjectHostGetObjectParams()
            _message.objectId = objectId
            _message.receiver = receiver
            proxyHandler.messageReceiver.accept(
                _message.serializeWithHeader(
                    proxyHandler.core,
                    MessageHeader(GET_OBJECT_ORDINAL)
                )
            )
        }

        override fun acquireObject(
            objectId: Int
        ) {
            val _message = RemoteObjectHostAcquireObjectParams()
            _message.objectId = objectId
            proxyHandler.messageReceiver.accept(
                _message.serializeWithHeader(
                    proxyHandler.core,
                    MessageHeader(ACQUIRE_OBJECT_ORDINAL)
                )
            )
        }

        override fun releaseObject(
            objectId: Int
        ) {
            val _message = RemoteObjectHostReleaseObjectParams()
            _message.objectId = objectId
            proxyHandler.messageReceiver.accept(
                _message.serializeWithHeader(
                    proxyHandler.core,
                    MessageHeader(RELEASE_OBJECT_ORDINAL)
                )
            )
        }
    }

    internal class Stub(core: Core?, impl: RemoteObjectHost?) :
        Interface.Stub<RemoteObjectHost?>(core, impl) {
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

                    GET_OBJECT_ORDINAL -> {
                        val data =
                            RemoteObjectHostGetObjectParams.deserialize(messageWithHeader.payload)
                        impl!!.getObject(data!!.objectId, data.receiver)
                        true
                    }

                    ACQUIRE_OBJECT_ORDINAL -> {
                        val data =
                            RemoteObjectHostAcquireObjectParams.deserialize(messageWithHeader.payload)
                        impl!!.acquireObject(data!!.objectId)
                        true
                    }

                    RELEASE_OBJECT_ORDINAL -> {
                        val data =
                            RemoteObjectHostReleaseObjectParams.deserialize(messageWithHeader.payload)
                        impl!!.releaseObject(data!!.objectId)
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
                if (header.type == InterfaceControlMessagesConstants.RUN_MESSAGE_ID) {
                    InterfaceControlMessagesHelper.handleRun(
                        core, MANAGER, messageWithHeader, receiver
                    )
                } else false
            } catch (e: DeserializationException) {
                System.err.println(e)
                false
            }
        }
    }

    internal class RemoteObjectHostGetObjectParams private constructor(version: Int) : Struct(
        STRUCT_SIZE, version
    ) {
        var objectId = 0
        var receiver: InterfaceRequest<RemoteObject>? = null

        constructor() : this(0)

        override fun encode(encoder: Encoder) {
            val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
            encoder0.encode(objectId, 8)
            encoder0.encode(receiver, 12, false)
        }

        companion object {
            private const val STRUCT_SIZE = 16
            private val VERSION_ARRAY = arrayOf(DataHeader(16, 0))
            private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
            fun deserialize(message: Message?): RemoteObjectHostGetObjectParams? {
                return decode(Decoder(message))
            }

            /**
             * Similar to the method above, but deserializes from a |ByteBuffer| instance.
             *
             * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
             */
            fun deserialize(data: ByteBuffer?): RemoteObjectHostGetObjectParams? {
                return deserialize(
                    Message(
                        data, ArrayList()
                    )
                )
            }

            fun decode(decoder0: Decoder?): RemoteObjectHostGetObjectParams? {
                if (decoder0 == null) {
                    return null
                }
                decoder0.increaseStackDepth()
                val result: RemoteObjectHostGetObjectParams
                try {
                    val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                    val elementsOrVersion = mainDataHeader.elementsOrVersion
                    result = RemoteObjectHostGetObjectParams(elementsOrVersion)
                    run { result.objectId = decoder0.readInt(8) }
                    run { result.receiver = decoder0.readInterfaceRequest(12, false) }
                } finally {
                    decoder0.decreaseStackDepth()
                }
                return result
            }
        }
    }

    internal class RemoteObjectHostAcquireObjectParams private constructor(version: Int) : Struct(
        STRUCT_SIZE, version
    ) {
        var objectId = 0

        constructor() : this(0)

        override fun encode(encoder: Encoder) {
            val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
            encoder0.encode(objectId, 8)
        }

        companion object {
            private const val STRUCT_SIZE = 16
            private val VERSION_ARRAY = arrayOf(DataHeader(16, 0))
            private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
            fun deserialize(message: Message?): RemoteObjectHostAcquireObjectParams? {
                return decode(Decoder(message))
            }

            /**
             * Similar to the method above, but deserializes from a |ByteBuffer| instance.
             *
             * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
             */
            fun deserialize(data: ByteBuffer?): RemoteObjectHostAcquireObjectParams? {
                return deserialize(
                    Message(
                        data, ArrayList()
                    )
                )
            }

            fun decode(decoder0: Decoder?): RemoteObjectHostAcquireObjectParams? {
                if (decoder0 == null) {
                    return null
                }
                decoder0.increaseStackDepth()
                val result: RemoteObjectHostAcquireObjectParams
                try {
                    val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                    val elementsOrVersion = mainDataHeader.elementsOrVersion
                    result = RemoteObjectHostAcquireObjectParams(elementsOrVersion)
                    run { result.objectId = decoder0.readInt(8) }
                } finally {
                    decoder0.decreaseStackDepth()
                }
                return result
            }
        }
    }

    internal class RemoteObjectHostReleaseObjectParams private constructor(version: Int) : Struct(
        STRUCT_SIZE, version
    ) {
        var objectId = 0

        constructor() : this(0)

        override fun encode(encoder: Encoder) {
            val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
            encoder0.encode(objectId, 8)
        }

        companion object {
            private const val STRUCT_SIZE = 16
            private val VERSION_ARRAY = arrayOf(DataHeader(16, 0))
            private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
            fun deserialize(message: Message?): RemoteObjectHostReleaseObjectParams? {
                return decode(Decoder(message))
            }

            /**
             * Similar to the method above, but deserializes from a |ByteBuffer| instance.
             *
             * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
             */
            fun deserialize(data: ByteBuffer?): RemoteObjectHostReleaseObjectParams? {
                return deserialize(
                    Message(
                        data, ArrayList()
                    )
                )
            }

            fun decode(decoder0: Decoder?): RemoteObjectHostReleaseObjectParams? {
                if (decoder0 == null) {
                    return null
                }
                decoder0.increaseStackDepth()
                val result: RemoteObjectHostReleaseObjectParams
                try {
                    val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                    val elementsOrVersion = mainDataHeader.elementsOrVersion
                    result = RemoteObjectHostReleaseObjectParams(elementsOrVersion)
                    run { result.objectId = decoder0.readInt(8) }
                } finally {
                    decoder0.decreaseStackDepth()
                }
                return result
            }
        }
    }
}