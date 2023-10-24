// ViewTransitionElement.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/frame/view_transition_state.mojom
//

package org.chromium.blink.mojom;


public final class ViewTransitionElement extends org.chromium.mojo.bindings.Struct {

    private static final int STRUCT_SIZE = 72;
    private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(72, 0)};
    private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public String tagName;
    public org.chromium.gfx.mojom.SizeF borderBoxSizeInCssSpace;
    public org.chromium.gfx.mojom.Transform viewportMatrix;
    public org.chromium.gfx.mojom.RectF overflowRectInLayoutSpace;
    public org.chromium.gfx.mojom.RectF capturedRectInLayoutSpace;
    public org.chromium.viz.mojom.ViewTransitionElementResourceId snapshotId;
    public int paintOrder;
    public java.util.Map<Integer, String> capturedCssProperties;

    private ViewTransitionElement(int version) {
        super(STRUCT_SIZE, version);
    }

    public ViewTransitionElement() {
        this(0);
    }

    public static ViewTransitionElement deserialize(org.chromium.mojo.bindings.Message message) {
        return decode(new org.chromium.mojo.bindings.Decoder(message));
    }

    /**
     * Similar to the method above, but deserializes from a |ByteBuffer| instance.
     *
     * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
     */
    public static ViewTransitionElement deserialize(java.nio.ByteBuffer data) {
        return deserialize(new org.chromium.mojo.bindings.Message(
                data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
    }

    @SuppressWarnings("unchecked")
    public static ViewTransitionElement decode(org.chromium.mojo.bindings.Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        ViewTransitionElement result;
        try {
            org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            final int elementsOrVersion = mainDataHeader.elementsOrVersion;
            result = new ViewTransitionElement(elementsOrVersion);
                {
                    
                result.tagName = decoder0.readString(8, false);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(16, false);
                result.borderBoxSizeInCssSpace = org.chromium.gfx.mojom.SizeF.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(24, false);
                result.viewportMatrix = org.chromium.gfx.mojom.Transform.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(32, false);
                result.overflowRectInLayoutSpace = org.chromium.gfx.mojom.RectF.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(40, true);
                result.capturedRectInLayoutSpace = org.chromium.gfx.mojom.RectF.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(48, false);
                result.snapshotId = org.chromium.viz.mojom.ViewTransitionElementResourceId.decode(decoder1);
                }
                {
                    
                result.paintOrder = decoder0.readInt(56);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(64, false);
                {
                    decoder1.readDataHeaderForMap();
                    int[] keys0;
                    String[] values0;
                    {
                        
                        keys0 = decoder1.readInts(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE, org.chromium.mojo.bindings.BindingsHelper.NOTHING_NULLABLE, org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
                        {
                            for (int i2 = 0; i2 < keys0.length; ++i2) {
                                ViewTransitionPropertyId.validate(keys0[i2]);
                            }
                        }
                    }
                    {
                        
                        org.chromium.mojo.bindings.Decoder decoder2 = decoder1.readPointer(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE, false);
                        {
                            org.chromium.mojo.bindings.DataHeader si2 = decoder2.readDataHeaderForPointerArray(keys0.length);
                            values0 = new String[si2.elementsOrVersion];
                            for (int i2 = 0; i2 < si2.elementsOrVersion; ++i2) {
                                
                                values0[i2] = decoder2.readString(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i2, false);
                            }
                        }
                    }
                    result.capturedCssProperties = new java.util.HashMap<Integer, String>();
                    for (int index0 = 0; index0 < keys0.length; ++index0) {
                        result.capturedCssProperties.put(keys0[index0],  values0[index0]);
                    }
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
        
        encoder0.encode(this.tagName, 8, false);
        
        encoder0.encode(this.borderBoxSizeInCssSpace, 16, false);
        
        encoder0.encode(this.viewportMatrix, 24, false);
        
        encoder0.encode(this.overflowRectInLayoutSpace, 32, false);
        
        encoder0.encode(this.capturedRectInLayoutSpace, 40, true);
        
        encoder0.encode(this.snapshotId, 48, false);
        
        encoder0.encode(this.paintOrder, 56);
        
        if (this.capturedCssProperties == null) {
            encoder0.encodeNullPointer(64, false);
        } else {
            org.chromium.mojo.bindings.Encoder encoder1 = encoder0.encoderForMap(64);
            int size0 = this.capturedCssProperties.size();
            int[] keys0 = new int[size0];
            String[] values0 = new String[size0];
            int index0 = 0;
            for (java.util.Map.Entry<Integer, String> entry0 : this.capturedCssProperties.entrySet()) {
                keys0[index0] = entry0.getKey();
                values0[index0] = entry0.getValue();
                ++index0;
            }
            
            encoder1.encode(keys0, org.chromium.mojo.bindings.DataHeader.HEADER_SIZE, org.chromium.mojo.bindings.BindingsHelper.NOTHING_NULLABLE, org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
            
            {
                org.chromium.mojo.bindings.Encoder encoder2 = encoder1.encodePointerArray(values0.length, org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE, org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
                for (int i1 = 0; i1 < values0.length; ++i1) {
                    
                    encoder2.encode(values0[i1], org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i1, false);
                }
            }
        }
    }
}