// SerializedBlob.java is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/blob/serialized_blob.mojom
//
package org.chromium.blink.mojom

import org.chromium.mojo.bindings.DataHeader
import org.chromium.mojo.bindings.Decoder
import org.chromium.mojo.bindings.Encoder
import org.chromium.mojo.bindings.Message
import org.chromium.mojo.bindings.Struct
import java.nio.ByteBuffer

class SerializedBlob private constructor(version: Int) : Struct(STRUCT_SIZE, version) {
    var uuid: String? = null
    var contentType: String? = null
    var size: Long = 0
    var blob: Blob? = null

    constructor() : this(0)

    override fun encode(encoder: Encoder) {
        val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
        encoder0.encode(uuid, 8, false)
        encoder0.encode(contentType, 16, false)
        encoder0.encode(size, 24)
        encoder0.encode<Blob?>(blob, 32, false, Blob.Companion.MANAGER)
    }

    companion object {
        private const val STRUCT_SIZE = 40
        private val VERSION_ARRAY = arrayOf(DataHeader(40, 0))
        private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
        fun deserialize(message: Message?): SerializedBlob? {
            return decode(Decoder(message))
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        fun deserialize(data: ByteBuffer?): SerializedBlob? {
            return deserialize(
                Message(
                    data, ArrayList()
                )
            )
        }

        fun decode(decoder0: Decoder?): SerializedBlob? {
            if (decoder0 == null) {
                return null
            }
            decoder0.increaseStackDepth()
            val result: SerializedBlob
            try {
                val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                val elementsOrVersion = mainDataHeader.elementsOrVersion
                result = SerializedBlob(elementsOrVersion)
                run { result.uuid = decoder0.readString(8, false) }
                run { result.contentType = decoder0.readString(16, false) }
                run { result.size = decoder0.readLong(24) }
                run {
                    result.blob = decoder0.readServiceInterface<Blob.Proxy?>(
                        32,
                        false,
                        Blob.Companion.MANAGER
                    )
                }
            } finally {
                decoder0.decreaseStackDepth()
            }
            return result
        }
    }
}