// CloneableMessage.java is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/messaging/cloneable_message.mojom
//
package org.chromium.blink.mojom

import org.chromium.mojo.bindings.BindingsHelper
import org.chromium.mojo.bindings.DataHeader
import org.chromium.mojo.bindings.Decoder
import org.chromium.mojo.bindings.Encoder
import org.chromium.mojo.bindings.Message
import org.chromium.mojo.bindings.Struct
import org.chromium.mojo_base.mojom.BigBuffer
import org.chromium.mojo_base.mojom.UnguessableToken
import org.chromium.url.internal.mojom.Origin
import org.chromium.url.internal.mojom.Origin.Companion.decode
import java.nio.ByteBuffer

class CloneableMessage private constructor(version: Int) : Struct(STRUCT_SIZE, version) {
    @JvmField
    var encodedMessage: BigBuffer? = null
    @JvmField
    var blobs: Array<SerializedBlob?>? = null

    @JvmField
    var senderOrigin: Origin? = null
    var stackTraceId: Long = 0
    var stackTraceDebuggerIdFirst: Long = 0
    var stackTraceDebuggerIdSecond: Long = 0
    var stackTraceShouldPause = false
    var lockedAgentClusterId: UnguessableToken? = null
    lateinit var fileSystemAccessTokens: Array<FileSystemAccessTransferToken?>

    constructor() : this(0)

    override fun encode(encoder: Encoder) {
        val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
        encoder0.encode(encodedMessage, 8, false)
        if (blobs == null) {
            encoder0.encodeNullPointer(24, false)
        } else {
            val encoder1 = encoder0.encodePointerArray(
                blobs!!.size,
                24,
                BindingsHelper.UNSPECIFIED_ARRAY_LENGTH
            )
            for (i0 in blobs!!.indices) {
                encoder1.encode(
                    blobs!![i0],
                    DataHeader.HEADER_SIZE + BindingsHelper.POINTER_SIZE * i0,
                    false
                )
            }
        }
        encoder0.encode(senderOrigin, 32, true)
        encoder0.encode(stackTraceId, 40)
        encoder0.encode(stackTraceDebuggerIdFirst, 48)
        encoder0.encode(stackTraceDebuggerIdSecond, 56)
        encoder0.encode(stackTraceShouldPause, 64, 0)
        encoder0.encode(lockedAgentClusterId, 72, true)
        encoder0.encode<FileSystemAccessTransferToken?>(
            fileSystemAccessTokens,
            80,
            BindingsHelper.NOTHING_NULLABLE,
            BindingsHelper.UNSPECIFIED_ARRAY_LENGTH,
            FileSystemAccessTransferToken.Companion.MANAGER
        )
    }

    companion object {
        private const val STRUCT_SIZE = 88
        private val VERSION_ARRAY = arrayOf(DataHeader(88, 0))
        private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
        fun deserialize(message: Message?): CloneableMessage? {
            return decode(Decoder(message))
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        fun deserialize(data: ByteBuffer?): CloneableMessage? {
            return deserialize(
                Message(
                    data, ArrayList()
                )
            )
        }

        fun decode(decoder0: Decoder?): CloneableMessage? {
            if (decoder0 == null) {
                return null
            }
            decoder0.increaseStackDepth()
            val result: CloneableMessage
            try {
                val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                val elementsOrVersion = mainDataHeader.elementsOrVersion
                result = CloneableMessage(elementsOrVersion)
                run { result.encodedMessage = BigBuffer.decode(decoder0, 8) }
                run {
                    val decoder1 = decoder0.readPointer(24, false)
                    run {
                        val si1 =
                            decoder1.readDataHeaderForPointerArray(BindingsHelper.UNSPECIFIED_ARRAY_LENGTH)
                        result.blobs = arrayOfNulls(si1.elementsOrVersion)
                        for (i1 in 0 until si1.elementsOrVersion) {
                            val decoder2 = decoder1.readPointer(
                                DataHeader.HEADER_SIZE + BindingsHelper.POINTER_SIZE * i1,
                                false
                            )
                            result.blobs!![i1] = SerializedBlob.Companion.decode(decoder2)
                        }
                    }
                }
                run {
                    val decoder1 = decoder0.readPointer(32, true)
                    result.senderOrigin = Origin.decode(decoder1)
                }
                run { result.stackTraceId = decoder0.readLong(40) }
                run { result.stackTraceDebuggerIdFirst = decoder0.readLong(48) }
                run { result.stackTraceDebuggerIdSecond = decoder0.readLong(56) }
                run { result.stackTraceShouldPause = decoder0.readBoolean(64, 0) }
                run {
                    val decoder1 = decoder0.readPointer(72, true)
                    result.lockedAgentClusterId = UnguessableToken.decode(decoder1)
                }
                run {
                    result.fileSystemAccessTokens =
                        decoder0.readServiceInterfaces<FileSystemAccessTransferToken?, FileSystemAccessTransferToken.Proxy?>(
                            80,
                            BindingsHelper.NOTHING_NULLABLE,
                            BindingsHelper.UNSPECIFIED_ARRAY_LENGTH,
                            FileSystemAccessTransferToken.Companion.MANAGER
                        )
                }
            } finally {
                decoder0.decreaseStackDepth()
            }
            return result
        }
    }
}