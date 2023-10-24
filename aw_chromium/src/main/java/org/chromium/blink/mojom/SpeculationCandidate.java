// SpeculationCandidate.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/speculation_rules/speculation_rules.mojom
//

package org.chromium.blink.mojom;


public final class SpeculationCandidate extends org.chromium.mojo.bindings.Struct {

    private static final int STRUCT_SIZE = 56;
    private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(56, 0)};
    private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public org.chromium.url.mojom.Url url;
    public int action;
    public Referrer referrer;
    public boolean requiresAnonymousClientIpWhenCrossOrigin;
    public int targetBrowsingContextNameHint;
    public int eagerness;
    public org.chromium.network.mojom.NoVarySearch noVarySearchHint;
    public int injectionWorld;

    private SpeculationCandidate(int version) {
        super(STRUCT_SIZE, version);
        this.action = (int) SpeculationAction.PREFETCH;
        this.requiresAnonymousClientIpWhenCrossOrigin = (boolean) false;
        this.targetBrowsingContextNameHint = (int) SpeculationTargetHint.NO_HINT;
        this.eagerness = (int) SpeculationEagerness.CONSERVATIVE;
        this.injectionWorld = (int) SpeculationInjectionWorld.NONE;
    }

    public SpeculationCandidate() {
        this(0);
    }

    public static SpeculationCandidate deserialize(org.chromium.mojo.bindings.Message message) {
        return decode(new org.chromium.mojo.bindings.Decoder(message));
    }

    /**
     * Similar to the method above, but deserializes from a |ByteBuffer| instance.
     *
     * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
     */
    public static SpeculationCandidate deserialize(java.nio.ByteBuffer data) {
        return deserialize(new org.chromium.mojo.bindings.Message(
                data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
    }

    @SuppressWarnings("unchecked")
    public static SpeculationCandidate decode(org.chromium.mojo.bindings.Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        SpeculationCandidate result;
        try {
            org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            final int elementsOrVersion = mainDataHeader.elementsOrVersion;
            result = new SpeculationCandidate(elementsOrVersion);
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                result.url = org.chromium.url.mojom.Url.decode(decoder1);
                }
                {
                    
                result.action = decoder0.readInt(16);
                    SpeculationAction.validate(result.action);
                    result.action = SpeculationAction.toKnownValue(result.action);
                }
                {
                    
                result.requiresAnonymousClientIpWhenCrossOrigin = decoder0.readBoolean(20, 0);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(24, false);
                result.referrer = Referrer.decode(decoder1);
                }
                {
                    
                result.targetBrowsingContextNameHint = decoder0.readInt(32);
                    SpeculationTargetHint.validate(result.targetBrowsingContextNameHint);
                    result.targetBrowsingContextNameHint = SpeculationTargetHint.toKnownValue(result.targetBrowsingContextNameHint);
                }
                {
                    
                result.eagerness = decoder0.readInt(36);
                    SpeculationEagerness.validate(result.eagerness);
                    result.eagerness = SpeculationEagerness.toKnownValue(result.eagerness);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(40, true);
                result.noVarySearchHint = org.chromium.network.mojom.NoVarySearch.decode(decoder1);
                }
                {
                    
                result.injectionWorld = decoder0.readInt(48);
                    SpeculationInjectionWorld.validate(result.injectionWorld);
                    result.injectionWorld = SpeculationInjectionWorld.toKnownValue(result.injectionWorld);
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
        
        encoder0.encode(this.url, 8, false);
        
        encoder0.encode(this.action, 16);
        
        encoder0.encode(this.requiresAnonymousClientIpWhenCrossOrigin, 20, 0);
        
        encoder0.encode(this.referrer, 24, false);
        
        encoder0.encode(this.targetBrowsingContextNameHint, 32);
        
        encoder0.encode(this.eagerness, 36);
        
        encoder0.encode(this.noVarySearchHint, 40, true);
        
        encoder0.encode(this.injectionWorld, 48);
    }
}