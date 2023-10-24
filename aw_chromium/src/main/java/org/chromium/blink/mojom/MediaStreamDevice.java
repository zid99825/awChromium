// MediaStreamDevice.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/mediastream/media_stream.mojom
//

package org.chromium.blink.mojom;


public final class MediaStreamDevice extends org.chromium.mojo.bindings.Struct {

    private static final int STRUCT_SIZE = 80;
    private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(80, 0)};
    private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public int type;
    public String id;
    public long displayId;
    public int videoFacing;
    public String groupId;
    public String matchedOutputDeviceId;
    public String name;
    public org.chromium.media.mojom.AudioParameters input;
    public org.chromium.mojo_base.mojom.UnguessableToken sessionId;
    public org.chromium.media.mojom.DisplayMediaInformation displayMediaInfo;

    private MediaStreamDevice(int version) {
        super(STRUCT_SIZE, version);
    }

    public MediaStreamDevice() {
        this(0);
    }

    public static MediaStreamDevice deserialize(org.chromium.mojo.bindings.Message message) {
        return decode(new org.chromium.mojo.bindings.Decoder(message));
    }

    /**
     * Similar to the method above, but deserializes from a |ByteBuffer| instance.
     *
     * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
     */
    public static MediaStreamDevice deserialize(java.nio.ByteBuffer data) {
        return deserialize(new org.chromium.mojo.bindings.Message(
                data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
    }

    @SuppressWarnings("unchecked")
    public static MediaStreamDevice decode(org.chromium.mojo.bindings.Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        MediaStreamDevice result;
        try {
            org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            final int elementsOrVersion = mainDataHeader.elementsOrVersion;
            result = new MediaStreamDevice(elementsOrVersion);
                {
                    
                result.type = decoder0.readInt(8);
                    MediaStreamType.validate(result.type);
                    result.type = MediaStreamType.toKnownValue(result.type);
                }
                {
                    
                result.videoFacing = decoder0.readInt(12);
                    org.chromium.media.mojom.VideoFacingMode.validate(result.videoFacing);
                    result.videoFacing = org.chromium.media.mojom.VideoFacingMode.toKnownValue(result.videoFacing);
                }
                {
                    
                result.id = decoder0.readString(16, false);
                }
                {
                    
                result.displayId = decoder0.readLong(24);
                }
                {
                    
                result.groupId = decoder0.readString(32, true);
                }
                {
                    
                result.matchedOutputDeviceId = decoder0.readString(40, true);
                }
                {
                    
                result.name = decoder0.readString(48, false);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(56, false);
                result.input = org.chromium.media.mojom.AudioParameters.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(64, true);
                result.sessionId = org.chromium.mojo_base.mojom.UnguessableToken.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(72, true);
                result.displayMediaInfo = org.chromium.media.mojom.DisplayMediaInformation.decode(decoder1);
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
        
        encoder0.encode(this.type, 8);
        
        encoder0.encode(this.videoFacing, 12);
        
        encoder0.encode(this.id, 16, false);
        
        encoder0.encode(this.displayId, 24);
        
        encoder0.encode(this.groupId, 32, true);
        
        encoder0.encode(this.matchedOutputDeviceId, 40, true);
        
        encoder0.encode(this.name, 48, false);
        
        encoder0.encode(this.input, 56, false);
        
        encoder0.encode(this.sessionId, 64, true);
        
        encoder0.encode(this.displayMediaInfo, 72, true);
    }
}