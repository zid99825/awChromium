// PasswordGenerationUiData.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     components/autofill/core/common/mojom/autofill_types.mojom
//

package org.chromium.autofill.mojom;

import androidx.annotation.IntDef;


public final class PasswordGenerationUiData extends org.chromium.mojo.bindings.Struct {

    private static final int STRUCT_SIZE = 56;
    private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(56, 0)};
    private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public org.chromium.gfx.mojom.RectF bounds;
    public int maxLength;
    public org.chromium.mojo_base.mojom.String16 generationElement;
    public FieldRendererId generationElementId;
    public boolean isGenerationElementPasswordType;
    public int textDirection;
    public FormData formData;

    private PasswordGenerationUiData(int version) {
        super(STRUCT_SIZE, version);
    }

    public PasswordGenerationUiData() {
        this(0);
    }

    public static PasswordGenerationUiData deserialize(org.chromium.mojo.bindings.Message message) {
        return decode(new org.chromium.mojo.bindings.Decoder(message));
    }

    /**
     * Similar to the method above, but deserializes from a |ByteBuffer| instance.
     *
     * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
     */
    public static PasswordGenerationUiData deserialize(java.nio.ByteBuffer data) {
        return deserialize(new org.chromium.mojo.bindings.Message(
                data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
    }

    @SuppressWarnings("unchecked")
    public static PasswordGenerationUiData decode(org.chromium.mojo.bindings.Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        PasswordGenerationUiData result;
        try {
            org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            final int elementsOrVersion = mainDataHeader.elementsOrVersion;
            result = new PasswordGenerationUiData(elementsOrVersion);
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                result.bounds = org.chromium.gfx.mojom.RectF.decode(decoder1);
                }
                {
                    
                result.maxLength = decoder0.readInt(16);
                }
                {
                    
                result.isGenerationElementPasswordType = decoder0.readBoolean(20, 0);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(24, false);
                result.generationElement = org.chromium.mojo_base.mojom.String16.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(32, false);
                result.generationElementId = FieldRendererId.decode(decoder1);
                }
                {
                    
                result.textDirection = decoder0.readInt(40);
                    org.chromium.mojo_base.mojom.TextDirection.validate(result.textDirection);
                    result.textDirection = org.chromium.mojo_base.mojom.TextDirection.toKnownValue(result.textDirection);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(48, false);
                result.formData = FormData.decode(decoder1);
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
        
        encoder0.encode(this.bounds, 8, false);
        
        encoder0.encode(this.maxLength, 16);
        
        encoder0.encode(this.isGenerationElementPasswordType, 20, 0);
        
        encoder0.encode(this.generationElement, 24, false);
        
        encoder0.encode(this.generationElementId, 32, false);
        
        encoder0.encode(this.textDirection, 40);
        
        encoder0.encode(this.formData, 48, false);
    }
}