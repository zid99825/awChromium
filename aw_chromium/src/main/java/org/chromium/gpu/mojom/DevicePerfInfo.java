// DevicePerfInfo.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     gpu/ipc/common/device_perf_info.mojom
//

package org.chromium.gpu.mojom;

import androidx.annotation.IntDef;


public final class DevicePerfInfo extends org.chromium.mojo.bindings.Struct {

    private static final int STRUCT_SIZE = 24;
    private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(24, 0)};
    private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public int totalPhysicalMemoryMb;
    public int totalDiskSpaceMb;
    public int hardwareConcurrency;

    private DevicePerfInfo(int version) {
        super(STRUCT_SIZE, version);
    }

    public DevicePerfInfo() {
        this(0);
    }

    public static DevicePerfInfo deserialize(org.chromium.mojo.bindings.Message message) {
        return decode(new org.chromium.mojo.bindings.Decoder(message));
    }

    /**
     * Similar to the method above, but deserializes from a |ByteBuffer| instance.
     *
     * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
     */
    public static DevicePerfInfo deserialize(java.nio.ByteBuffer data) {
        return deserialize(new org.chromium.mojo.bindings.Message(
                data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
    }

    @SuppressWarnings("unchecked")
    public static DevicePerfInfo decode(org.chromium.mojo.bindings.Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        DevicePerfInfo result;
        try {
            org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            final int elementsOrVersion = mainDataHeader.elementsOrVersion;
            result = new DevicePerfInfo(elementsOrVersion);
                {
                    
                result.totalPhysicalMemoryMb = decoder0.readInt(8);
                }
                {
                    
                result.totalDiskSpaceMb = decoder0.readInt(12);
                }
                {
                    
                result.hardwareConcurrency = decoder0.readInt(16);
                }

        } finally {
            decoder0.decreaseStackDepth();
        }
        return result;
    }

    @SuppressWarnings("unchecked")
    @Override
    protected final void encode(org.chromium.mojo.bindings.Encoder encoder) {
        org.chromium.mojo.bindings.Encoder encoder0 = encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO);
        
        encoder0.encode(this.totalPhysicalMemoryMb, 8);
        
        encoder0.encode(this.totalDiskSpaceMb, 12);
        
        encoder0.encode(this.hardwareConcurrency, 16);
    }
}