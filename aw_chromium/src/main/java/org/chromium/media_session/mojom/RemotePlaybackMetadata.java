// RemotePlaybackMetadata.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     services/media_session/public/mojom/media_session.mojom
//

package org.chromium.media_session.mojom;

public final class RemotePlaybackMetadata extends org.chromium.mojo.bindings.Struct {

    private static final int STRUCT_SIZE = 40;
    private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(32, 0), new org.chromium.mojo.bindings.DataHeader(40, 17), new org.chromium.mojo.bindings.DataHeader(40, 18)};
    private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[2];
    public String videoCodec;
    public String audioCodec;
    public boolean remotePlaybackDisabled;
    public boolean remotePlaybackStarted;
    public String unusedField;
    public boolean isEncryptedMedia;

    private RemotePlaybackMetadata(int version) {
        super(STRUCT_SIZE, version);
    }

    public RemotePlaybackMetadata() {
        this(18);
    }

    public static RemotePlaybackMetadata deserialize(org.chromium.mojo.bindings.Message message) {
        return decode(new org.chromium.mojo.bindings.Decoder(message));
    }

    /**
     * Similar to the method above, but deserializes from a |ByteBuffer| instance.
     *
     * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
     */
    public static RemotePlaybackMetadata deserialize(java.nio.ByteBuffer data) {
        return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
    }

    @SuppressWarnings("unchecked")
    public static RemotePlaybackMetadata decode(org.chromium.mojo.bindings.Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        RemotePlaybackMetadata result;
        try {
            org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            final int elementsOrVersion = mainDataHeader.elementsOrVersion;
            result = new RemotePlaybackMetadata(elementsOrVersion);
            {

                result.videoCodec = decoder0.readString(8, false);
            }
            {

                result.audioCodec = decoder0.readString(16, false);
            }
            {

                result.remotePlaybackDisabled = decoder0.readBoolean(24, 0);
            }
            if (elementsOrVersion >= 17) {
                {

                    result.remotePlaybackStarted = decoder0.readBoolean(24, 1);
                }
            }
            if (elementsOrVersion >= 18) {
                {

                    result.isEncryptedMedia = decoder0.readBoolean(24, 2);
                }
            }
            if (elementsOrVersion >= 17) {
                {

                    result.unusedField = decoder0.readString(32, true);
                }
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

        encoder0.encode(this.videoCodec, 8, false);

        encoder0.encode(this.audioCodec, 16, false);

        encoder0.encode(this.remotePlaybackDisabled, 24, 0);

        encoder0.encode(this.remotePlaybackStarted, 24, 1);

        encoder0.encode(this.isEncryptedMedia, 24, 2);

        encoder0.encode(this.unusedField, 32, true);
    }
}