// UserActivationSnapshot.java is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/messaging/user_activation_snapshot.mojom
//
package org.chromium.blink.mojom

import org.chromium.mojo.bindings.DataHeader
import org.chromium.mojo.bindings.Decoder
import org.chromium.mojo.bindings.Encoder
import org.chromium.mojo.bindings.Message
import org.chromium.mojo.bindings.Struct
import java.nio.ByteBuffer

class UserActivationSnapshot private constructor(version: Int) : Struct(STRUCT_SIZE, version) {
    var hasBeenActive = false
    var wasActive = false

    override fun encode(encoder: Encoder) {
        val encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO)
        encoder0.encode(hasBeenActive, 8, 0)
        encoder0.encode(wasActive, 8, 1)
    }

    companion object {
        private const val STRUCT_SIZE = 16
        private val VERSION_ARRAY = arrayOf(DataHeader(16, 0))
        private val DEFAULT_STRUCT_INFO = VERSION_ARRAY[0]
        fun deserialize(message: Message?): UserActivationSnapshot? {
            return decode(Decoder(message))
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        fun deserialize(data: ByteBuffer?): UserActivationSnapshot? {
            return deserialize(
                Message(
                    data, ArrayList()
                )
            )
        }

        fun decode(decoder0: Decoder?): UserActivationSnapshot? {
            if (decoder0 == null) {
                return null
            }
            decoder0.increaseStackDepth()
            val result: UserActivationSnapshot
            try {
                val mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY)
                val elementsOrVersion = mainDataHeader.elementsOrVersion
                result = UserActivationSnapshot(elementsOrVersion)
                run { result.hasBeenActive = decoder0.readBoolean(8, 0) }
                run { result.wasActive = decoder0.readBoolean(8, 1) }
            } finally {
                decoder0.decreaseStackDepth()
            }
            return result
        }
    }
}