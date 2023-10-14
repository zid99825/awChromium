// RemoteTypedArray.java is auto generated by mojom_bindings_generator.py, do not edit
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
import org.chromium.mojo.bindings.Encoder
import org.chromium.mojo.bindings.Message
import org.chromium.mojo.bindings.Struct
import org.chromium.mojo_base.mojom.BigBuffer
import java.nio.ByteBuffer

class RemoteTypedArray private constructor(version: Int) : Struct(STRUCT_SIZE, version) {
    @JvmField
    var type = 0

    @JvmField
    var buffer: BigBuffer? = null

    override fun encode(encoder: Encoder) {
        val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
        encoder0.encode(type, 8)
        encoder0.encode(buffer, 16, false)
    }

    companion object {
        private const val STRUCT_SIZE = 32
        private val VERSION_ARRAY = arrayOf(DataHeader(32, 0))
        private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
        fun deserialize(message: Message?): RemoteTypedArray? {
            return decode(Decoder(message))
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        fun deserialize(data: ByteBuffer?): RemoteTypedArray? {
            return deserialize(
                Message(
                    data, ArrayList()
                )
            )
        }

        fun decode(decoder0: Decoder?): RemoteTypedArray? {
            if (decoder0 == null) {
                return null
            }
            decoder0.increaseStackDepth()
            val result: RemoteTypedArray
            try {
                val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                val elementsOrVersion = mainDataHeader.elementsOrVersion
                result = RemoteTypedArray(elementsOrVersion)
                run {
                    result.type = decoder0.readInt(8)
                    RemoteArrayType.validate(result.type)
                    result.type = RemoteArrayType.toKnownValue(result.type)
                }
                run { result.buffer = BigBuffer.decode(decoder0, 16) }
            } finally {
                decoder0.decreaseStackDepth()
            }
            return result
        }
    }
}