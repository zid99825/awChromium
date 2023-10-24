// ResourceTimingInfo.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/timing/resource_timing.mojom
//

package org.chromium.blink.mojom;


public final class ResourceTimingInfo extends org.chromium.mojo.bindings.Struct {

    private static final int STRUCT_SIZE = 104;
    private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(104, 0)};
    private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
    public String name;
    public org.chromium.mojo_base.mojom.TimeTicks startTime;
    public String alpnNegotiatedProtocol;
    public String connectionInfo;
    public org.chromium.network.mojom.LoadTimingInfo timing;
    public org.chromium.mojo_base.mojom.TimeTicks lastRedirectEndTime;
    public org.chromium.mojo_base.mojom.TimeTicks responseEnd;
    public int cacheState;
    public long encodedBodySize;
    public long decodedBodySize;
    public boolean didReuseConnection;
    public boolean isSecureTransport;
    public boolean allowTimingDetails;
    public boolean allowNegativeValues;
    public ServerTimingInfo[] serverTiming;
    public boolean renderBlockingStatus;
    public short responseStatus;
    public String contentType;

    private ResourceTimingInfo(int version) {
        super(STRUCT_SIZE, version);
    }

    public ResourceTimingInfo() {
        this(0);
    }

    public static ResourceTimingInfo deserialize(org.chromium.mojo.bindings.Message message) {
        return decode(new org.chromium.mojo.bindings.Decoder(message));
    }

    /**
     * Similar to the method above, but deserializes from a |ByteBuffer| instance.
     *
     * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
     */
    public static ResourceTimingInfo deserialize(java.nio.ByteBuffer data) {
        return deserialize(new org.chromium.mojo.bindings.Message(
                data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
    }

    @SuppressWarnings("unchecked")
    public static ResourceTimingInfo decode(org.chromium.mojo.bindings.Decoder decoder0) {
        if (decoder0 == null) {
            return null;
        }
        decoder0.increaseStackDepth();
        ResourceTimingInfo result;
        try {
            org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
            final int elementsOrVersion = mainDataHeader.elementsOrVersion;
            result = new ResourceTimingInfo(elementsOrVersion);
                {
                    
                result.name = decoder0.readString(8, false);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(16, false);
                result.startTime = org.chromium.mojo_base.mojom.TimeTicks.decode(decoder1);
                }
                {
                    
                result.alpnNegotiatedProtocol = decoder0.readString(24, false);
                }
                {
                    
                result.connectionInfo = decoder0.readString(32, false);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(40, true);
                result.timing = org.chromium.network.mojom.LoadTimingInfo.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(48, false);
                result.lastRedirectEndTime = org.chromium.mojo_base.mojom.TimeTicks.decode(decoder1);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(56, false);
                result.responseEnd = org.chromium.mojo_base.mojom.TimeTicks.decode(decoder1);
                }
                {
                    
                result.cacheState = decoder0.readInt(64);
                    CacheState.validate(result.cacheState);
                    result.cacheState = CacheState.toKnownValue(result.cacheState);
                }
                {
                    
                result.didReuseConnection = decoder0.readBoolean(68, 0);
                }
                {
                    
                result.isSecureTransport = decoder0.readBoolean(68, 1);
                }
                {
                    
                result.allowTimingDetails = decoder0.readBoolean(68, 2);
                }
                {
                    
                result.allowNegativeValues = decoder0.readBoolean(68, 3);
                }
                {
                    
                result.renderBlockingStatus = decoder0.readBoolean(68, 4);
                }
                {
                    
                result.responseStatus = decoder0.readShort(70);
                }
                {
                    
                result.encodedBodySize = decoder0.readLong(72);
                }
                {
                    
                result.decodedBodySize = decoder0.readLong(80);
                }
                {
                    
                org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(88, false);
                {
                    org.chromium.mojo.bindings.DataHeader si1 = decoder1.readDataHeaderForPointerArray(org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
                    result.serverTiming = new ServerTimingInfo[si1.elementsOrVersion];
                    for (int i1 = 0; i1 < si1.elementsOrVersion; ++i1) {
                        
                        org.chromium.mojo.bindings.Decoder decoder2 = decoder1.readPointer(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i1, false);
                        result.serverTiming[i1] = ServerTimingInfo.decode(decoder2);
                    }
                }
                }
                {
                    
                result.contentType = decoder0.readString(96, false);
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
        
        encoder0.encode(this.name, 8, false);
        
        encoder0.encode(this.startTime, 16, false);
        
        encoder0.encode(this.alpnNegotiatedProtocol, 24, false);
        
        encoder0.encode(this.connectionInfo, 32, false);
        
        encoder0.encode(this.timing, 40, true);
        
        encoder0.encode(this.lastRedirectEndTime, 48, false);
        
        encoder0.encode(this.responseEnd, 56, false);
        
        encoder0.encode(this.cacheState, 64);
        
        encoder0.encode(this.didReuseConnection, 68, 0);
        
        encoder0.encode(this.isSecureTransport, 68, 1);
        
        encoder0.encode(this.allowTimingDetails, 68, 2);
        
        encoder0.encode(this.allowNegativeValues, 68, 3);
        
        encoder0.encode(this.renderBlockingStatus, 68, 4);
        
        encoder0.encode(this.responseStatus, 70);
        
        encoder0.encode(this.encodedBodySize, 72);
        
        encoder0.encode(this.decodedBodySize, 80);
        
        if (this.serverTiming == null) {
            encoder0.encodeNullPointer(88, false);
        } else {
            org.chromium.mojo.bindings.Encoder encoder1 = encoder0.encodePointerArray(this.serverTiming.length, 88, org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
            for (int i0 = 0; i0 < this.serverTiming.length; ++i0) {
                
                encoder1.encode(this.serverTiming[i0], org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i0, false);
            }
        }
        
        encoder0.encode(this.contentType, 96, false);
    }
}