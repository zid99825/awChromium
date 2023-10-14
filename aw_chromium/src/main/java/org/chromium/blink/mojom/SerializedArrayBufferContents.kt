// SerializedArrayBufferContents.java is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/array_buffer/array_buffer_contents.mojom
//
package org.chromium.blink.mojom

import org.chromium.mojo.bindings.DataHeader
import org.chromium.mojo.bindings.Decoder
import org.chromium.mojo.bindings.Encoder
import org.chromium.mojo.bindings.Message
import org.chromium.mojo.bindings.Struct
import org.chromium.mojo_base.mojom.BigBuffer
import java.nio.ByteBuffer

class SerializedArrayBufferContents private constructor(version: Int) :
    Struct(STRUCT_SIZE, version) {
    var contents: BigBuffer? = null

    override fun encode(encoder: Encoder) {
        val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
        encoder0.encode(contents, 8, false)
    }

    companion object {
        private const val STRUCT_SIZE = 24
        private val VERSION_ARRAY = arrayOf(DataHeader(24, 0))
        private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
        fun deserialize(message: Message?): SerializedArrayBufferContents? {
            return decode(Decoder(message))
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        fun deserialize(data: ByteBuffer?): SerializedArrayBufferContents? {
            return deserialize(
                Message(
                    data, ArrayList()
                )
            )
        }

        fun decode(decoder0: Decoder?): SerializedArrayBufferContents? {
            if (decoder0 == null) {
                return null
            }
            decoder0.increaseStackDepth()
            val result: SerializedArrayBufferContents
            try {
                val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                val elementsOrVersion = mainDataHeader.elementsOrVersion
                result = SerializedArrayBufferContents(elementsOrVersion)
                run { result.contents = BigBuffer.decode(decoder0, 8) }
            } finally {
                decoder0.decreaseStackDepth()
            }
            return result
        }
    }
}