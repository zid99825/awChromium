// AndroidFontLookup_Internal.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/android_font_lookup/android_font_lookup.mojom
//

package org.chromium.blink.mojom;


class AndroidFontLookup_Internal {

    public static final org.chromium.mojo.bindings.Interface.Manager<AndroidFontLookup, AndroidFontLookup.Proxy> MANAGER =
            new org.chromium.mojo.bindings.Interface.Manager<AndroidFontLookup, AndroidFontLookup.Proxy>() {

        @Override
        public String getName() {
            return "blink.mojom.AndroidFontLookup";
        }

        @Override
        public int getVersion() {
          return 0;
        }

        @Override
        public Proxy buildProxy(org.chromium.mojo.system.Core core,
                                org.chromium.mojo.bindings.MessageReceiverWithResponder messageReceiver) {
            return new Proxy(core, messageReceiver);
        }

        @Override
        public Stub buildStub(org.chromium.mojo.system.Core core, AndroidFontLookup impl) {
            return new Stub(core, impl);
        }

        @Override
        public AndroidFontLookup[] buildArray(int size) {
          return new AndroidFontLookup[size];
        }
    };


    private static final int GET_UNIQUE_NAME_LOOKUP_TABLE_ORDINAL = 0;

    private static final int MATCH_LOCAL_FONT_BY_UNIQUE_NAME_ORDINAL = 1;

    private static final int FETCH_ALL_FONT_FILES_ORDINAL = 2;


    static final class Proxy extends org.chromium.mojo.bindings.Interface.AbstractProxy implements AndroidFontLookup.Proxy {

        Proxy(org.chromium.mojo.system.Core core,
              org.chromium.mojo.bindings.MessageReceiverWithResponder messageReceiver) {
            super(core, messageReceiver);
        }


        @Override
        public void getUniqueNameLookupTable(

GetUniqueNameLookupTable_Response callback) {

            AndroidFontLookupGetUniqueNameLookupTableParams _message = new AndroidFontLookupGetUniqueNameLookupTableParams();


            getProxyHandler().getMessageReceiver().acceptWithResponder(
                    _message.serializeWithHeader(
                            getProxyHandler().getCore(),
                            new org.chromium.mojo.bindings.MessageHeader(
                                    GET_UNIQUE_NAME_LOOKUP_TABLE_ORDINAL,
                                    org.chromium.mojo.bindings.MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG,
                                    0)),
                    new AndroidFontLookupGetUniqueNameLookupTableResponseParamsForwardToCallback(callback));

        }


        @Override
        public void matchLocalFontByUniqueName(
String fontUniqueName, 
MatchLocalFontByUniqueName_Response callback) {

            AndroidFontLookupMatchLocalFontByUniqueNameParams _message = new AndroidFontLookupMatchLocalFontByUniqueNameParams();

            _message.fontUniqueName = fontUniqueName;


            getProxyHandler().getMessageReceiver().acceptWithResponder(
                    _message.serializeWithHeader(
                            getProxyHandler().getCore(),
                            new org.chromium.mojo.bindings.MessageHeader(
                                    MATCH_LOCAL_FONT_BY_UNIQUE_NAME_ORDINAL,
                                    org.chromium.mojo.bindings.MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG,
                                    0)),
                    new AndroidFontLookupMatchLocalFontByUniqueNameResponseParamsForwardToCallback(callback));

        }


        @Override
        public void fetchAllFontFiles(

FetchAllFontFiles_Response callback) {

            AndroidFontLookupFetchAllFontFilesParams _message = new AndroidFontLookupFetchAllFontFilesParams();


            getProxyHandler().getMessageReceiver().acceptWithResponder(
                    _message.serializeWithHeader(
                            getProxyHandler().getCore(),
                            new org.chromium.mojo.bindings.MessageHeader(
                                    FETCH_ALL_FONT_FILES_ORDINAL,
                                    org.chromium.mojo.bindings.MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG,
                                    0)),
                    new AndroidFontLookupFetchAllFontFilesResponseParamsForwardToCallback(callback));

        }


    }

    static final class Stub extends org.chromium.mojo.bindings.Interface.Stub<AndroidFontLookup> {

        Stub(org.chromium.mojo.system.Core core, AndroidFontLookup impl) {
            super(core, impl);
        }

        @Override
        public boolean accept(org.chromium.mojo.bindings.Message message) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader =
                        message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                int flags = org.chromium.mojo.bindings.MessageHeader.NO_FLAG;
                if (header.hasFlag(org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG)) {
                    flags = flags | org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG;
                }
                if (!header.validateHeader(flags)) {
                    return false;
                }
                switch(header.getType()) {

                    case org.chromium.mojo.bindings.interfacecontrol.InterfaceControlMessagesConstants.RUN_OR_CLOSE_PIPE_MESSAGE_ID:
                        return org.chromium.mojo.bindings.InterfaceControlMessagesHelper.handleRunOrClosePipe(
                                AndroidFontLookup_Internal.MANAGER, messageWithHeader);








                    default:
                        return false;
                }
            } catch (org.chromium.mojo.bindings.DeserializationException e) {
                System.err.println(e);
                return false;
            }
        }

        @Override
        public boolean acceptWithResponder(org.chromium.mojo.bindings.Message message, org.chromium.mojo.bindings.MessageReceiver receiver) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader =
                        message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                int flags = org.chromium.mojo.bindings.MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG;
                if (header.hasFlag(org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG)) {
                    flags = flags | org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG;
                }
                if (!header.validateHeader(flags)) {
                    return false;
                }
                switch(header.getType()) {

                    case org.chromium.mojo.bindings.interfacecontrol.InterfaceControlMessagesConstants.RUN_MESSAGE_ID:
                        return org.chromium.mojo.bindings.InterfaceControlMessagesHelper.handleRun(
                                getCore(), AndroidFontLookup_Internal.MANAGER, messageWithHeader, receiver);







                    case GET_UNIQUE_NAME_LOOKUP_TABLE_ORDINAL: {

                        AndroidFontLookupGetUniqueNameLookupTableParams.deserialize(messageWithHeader.getPayload());

                        getImpl().getUniqueNameLookupTable(new AndroidFontLookupGetUniqueNameLookupTableResponseParamsProxyToResponder(getCore(), receiver, header.getRequestId()));
                        return true;
                    }







                    case MATCH_LOCAL_FONT_BY_UNIQUE_NAME_ORDINAL: {

                        AndroidFontLookupMatchLocalFontByUniqueNameParams data =
                                AndroidFontLookupMatchLocalFontByUniqueNameParams.deserialize(messageWithHeader.getPayload());

                        getImpl().matchLocalFontByUniqueName(data.fontUniqueName, new AndroidFontLookupMatchLocalFontByUniqueNameResponseParamsProxyToResponder(getCore(), receiver, header.getRequestId()));
                        return true;
                    }







                    case FETCH_ALL_FONT_FILES_ORDINAL: {

                        AndroidFontLookupFetchAllFontFilesParams.deserialize(messageWithHeader.getPayload());

                        getImpl().fetchAllFontFiles(new AndroidFontLookupFetchAllFontFilesResponseParamsProxyToResponder(getCore(), receiver, header.getRequestId()));
                        return true;
                    }


                    default:
                        return false;
                }
            } catch (org.chromium.mojo.bindings.DeserializationException e) {
                System.err.println(e);
                return false;
            }
        }
    }


    
    static final class AndroidFontLookupGetUniqueNameLookupTableParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 8;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(8, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];

        private AndroidFontLookupGetUniqueNameLookupTableParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public AndroidFontLookupGetUniqueNameLookupTableParams() {
            this(0);
        }

        public static AndroidFontLookupGetUniqueNameLookupTableParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static AndroidFontLookupGetUniqueNameLookupTableParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(
                    data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static AndroidFontLookupGetUniqueNameLookupTableParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            AndroidFontLookupGetUniqueNameLookupTableParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new AndroidFontLookupGetUniqueNameLookupTableParams(elementsOrVersion);

            } finally {
                decoder0.decreaseStackDepth();
            }
            return result;
        }

        @SuppressWarnings("unchecked")
        @Override
        protected final void encode(org.chromium.mojo.bindings.Encoder encoder) {
            encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO);
        }
    }



    
    static final class AndroidFontLookupGetUniqueNameLookupTableResponseParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public String[] uniqueFontNames;

        private AndroidFontLookupGetUniqueNameLookupTableResponseParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public AndroidFontLookupGetUniqueNameLookupTableResponseParams() {
            this(0);
        }

        public static AndroidFontLookupGetUniqueNameLookupTableResponseParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static AndroidFontLookupGetUniqueNameLookupTableResponseParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(
                    data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static AndroidFontLookupGetUniqueNameLookupTableResponseParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            AndroidFontLookupGetUniqueNameLookupTableResponseParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new AndroidFontLookupGetUniqueNameLookupTableResponseParams(elementsOrVersion);
                    {
                        
                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                    {
                        org.chromium.mojo.bindings.DataHeader si1 = decoder1.readDataHeaderForPointerArray(org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
                        result.uniqueFontNames = new String[si1.elementsOrVersion];
                        for (int i1 = 0; i1 < si1.elementsOrVersion; ++i1) {
                            
                            result.uniqueFontNames[i1] = decoder1.readString(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i1, false);
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
            
            if (this.uniqueFontNames == null) {
                encoder0.encodeNullPointer(8, false);
            } else {
                org.chromium.mojo.bindings.Encoder encoder1 = encoder0.encodePointerArray(this.uniqueFontNames.length, 8, org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
                for (int i0 = 0; i0 < this.uniqueFontNames.length; ++i0) {
                    
                    encoder1.encode(this.uniqueFontNames[i0], org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i0, false);
                }
            }
        }
    }

    static class AndroidFontLookupGetUniqueNameLookupTableResponseParamsForwardToCallback extends org.chromium.mojo.bindings.SideEffectFreeCloseable
            implements org.chromium.mojo.bindings.MessageReceiver {
        private final AndroidFontLookup.GetUniqueNameLookupTable_Response mCallback;

        AndroidFontLookupGetUniqueNameLookupTableResponseParamsForwardToCallback(AndroidFontLookup.GetUniqueNameLookupTable_Response callback) {
            this.mCallback = callback;
        }

        @Override
        public boolean accept(org.chromium.mojo.bindings.Message message) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader =
                        message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                if (!header.validateHeader(GET_UNIQUE_NAME_LOOKUP_TABLE_ORDINAL,
                                           org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG| org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG)) {
                    return false;
                }

                AndroidFontLookupGetUniqueNameLookupTableResponseParams response = AndroidFontLookupGetUniqueNameLookupTableResponseParams.deserialize(messageWithHeader.getPayload());

                mCallback.call(response.uniqueFontNames);
                return true;
            } catch (org.chromium.mojo.bindings.DeserializationException e) {
                return false;
            }
        }
    }

    static class AndroidFontLookupGetUniqueNameLookupTableResponseParamsProxyToResponder implements AndroidFontLookup.GetUniqueNameLookupTable_Response {

        private final org.chromium.mojo.system.Core mCore;
        private final org.chromium.mojo.bindings.MessageReceiver mMessageReceiver;
        private final long mRequestId;

        AndroidFontLookupGetUniqueNameLookupTableResponseParamsProxyToResponder(
                org.chromium.mojo.system.Core core,
                org.chromium.mojo.bindings.MessageReceiver messageReceiver,
                long requestId) {
            mCore = core;
            mMessageReceiver = messageReceiver;
            mRequestId = requestId;
        }

        @Override
        public void call(String[] uniqueFontNames) {
            AndroidFontLookupGetUniqueNameLookupTableResponseParams _response = new AndroidFontLookupGetUniqueNameLookupTableResponseParams();

            _response.uniqueFontNames = uniqueFontNames;

            org.chromium.mojo.bindings.ServiceMessage _message =
                    _response.serializeWithHeader(
                            mCore,
                            new org.chromium.mojo.bindings.MessageHeader(
                                    GET_UNIQUE_NAME_LOOKUP_TABLE_ORDINAL,
                                    org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG| org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG,
                                    mRequestId));
            mMessageReceiver.accept(_message);
        }
    }



    
    static final class AndroidFontLookupMatchLocalFontByUniqueNameParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public String fontUniqueName;

        private AndroidFontLookupMatchLocalFontByUniqueNameParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public AndroidFontLookupMatchLocalFontByUniqueNameParams() {
            this(0);
        }

        public static AndroidFontLookupMatchLocalFontByUniqueNameParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static AndroidFontLookupMatchLocalFontByUniqueNameParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(
                    data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static AndroidFontLookupMatchLocalFontByUniqueNameParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            AndroidFontLookupMatchLocalFontByUniqueNameParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new AndroidFontLookupMatchLocalFontByUniqueNameParams(elementsOrVersion);
                    {
                        
                    result.fontUniqueName = decoder0.readString(8, false);
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
            
            encoder0.encode(this.fontUniqueName, 8, false);
        }
    }



    
    static final class AndroidFontLookupMatchLocalFontByUniqueNameResponseParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public org.chromium.mojo_base.mojom.ReadOnlyFile fontFileHandle;

        private AndroidFontLookupMatchLocalFontByUniqueNameResponseParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public AndroidFontLookupMatchLocalFontByUniqueNameResponseParams() {
            this(0);
        }

        public static AndroidFontLookupMatchLocalFontByUniqueNameResponseParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static AndroidFontLookupMatchLocalFontByUniqueNameResponseParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(
                    data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static AndroidFontLookupMatchLocalFontByUniqueNameResponseParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            AndroidFontLookupMatchLocalFontByUniqueNameResponseParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new AndroidFontLookupMatchLocalFontByUniqueNameResponseParams(elementsOrVersion);
                    {
                        
                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, true);
                    result.fontFileHandle = org.chromium.mojo_base.mojom.ReadOnlyFile.decode(decoder1);
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
            
            encoder0.encode(this.fontFileHandle, 8, true);
        }
    }

    static class AndroidFontLookupMatchLocalFontByUniqueNameResponseParamsForwardToCallback extends org.chromium.mojo.bindings.SideEffectFreeCloseable
            implements org.chromium.mojo.bindings.MessageReceiver {
        private final AndroidFontLookup.MatchLocalFontByUniqueName_Response mCallback;

        AndroidFontLookupMatchLocalFontByUniqueNameResponseParamsForwardToCallback(AndroidFontLookup.MatchLocalFontByUniqueName_Response callback) {
            this.mCallback = callback;
        }

        @Override
        public boolean accept(org.chromium.mojo.bindings.Message message) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader =
                        message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                if (!header.validateHeader(MATCH_LOCAL_FONT_BY_UNIQUE_NAME_ORDINAL,
                                           org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG| org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG)) {
                    return false;
                }

                AndroidFontLookupMatchLocalFontByUniqueNameResponseParams response = AndroidFontLookupMatchLocalFontByUniqueNameResponseParams.deserialize(messageWithHeader.getPayload());

                mCallback.call(response.fontFileHandle);
                return true;
            } catch (org.chromium.mojo.bindings.DeserializationException e) {
                return false;
            }
        }
    }

    static class AndroidFontLookupMatchLocalFontByUniqueNameResponseParamsProxyToResponder implements AndroidFontLookup.MatchLocalFontByUniqueName_Response {

        private final org.chromium.mojo.system.Core mCore;
        private final org.chromium.mojo.bindings.MessageReceiver mMessageReceiver;
        private final long mRequestId;

        AndroidFontLookupMatchLocalFontByUniqueNameResponseParamsProxyToResponder(
                org.chromium.mojo.system.Core core,
                org.chromium.mojo.bindings.MessageReceiver messageReceiver,
                long requestId) {
            mCore = core;
            mMessageReceiver = messageReceiver;
            mRequestId = requestId;
        }

        @Override
        public void call(org.chromium.mojo_base.mojom.ReadOnlyFile fontFileHandle) {
            AndroidFontLookupMatchLocalFontByUniqueNameResponseParams _response = new AndroidFontLookupMatchLocalFontByUniqueNameResponseParams();

            _response.fontFileHandle = fontFileHandle;

            org.chromium.mojo.bindings.ServiceMessage _message =
                    _response.serializeWithHeader(
                            mCore,
                            new org.chromium.mojo.bindings.MessageHeader(
                                    MATCH_LOCAL_FONT_BY_UNIQUE_NAME_ORDINAL,
                                    org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG| org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG,
                                    mRequestId));
            mMessageReceiver.accept(_message);
        }
    }



    
    static final class AndroidFontLookupFetchAllFontFilesParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 8;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(8, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];

        private AndroidFontLookupFetchAllFontFilesParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public AndroidFontLookupFetchAllFontFilesParams() {
            this(0);
        }

        public static AndroidFontLookupFetchAllFontFilesParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static AndroidFontLookupFetchAllFontFilesParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(
                    data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static AndroidFontLookupFetchAllFontFilesParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            AndroidFontLookupFetchAllFontFilesParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new AndroidFontLookupFetchAllFontFilesParams(elementsOrVersion);

            } finally {
                decoder0.decreaseStackDepth();
            }
            return result;
        }

        @SuppressWarnings("unchecked")
        @Override
        protected final void encode(org.chromium.mojo.bindings.Encoder encoder) {
            encoder.getEncoderAtDataOffset(DEFAULT_STRUCT_INFO);
        }
    }



    
    static final class AndroidFontLookupFetchAllFontFilesResponseParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[] {new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public java.util.Map<String, org.chromium.mojo_base.mojom.ReadOnlyFile> fontFiles;

        private AndroidFontLookupFetchAllFontFilesResponseParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public AndroidFontLookupFetchAllFontFilesResponseParams() {
            this(0);
        }

        public static AndroidFontLookupFetchAllFontFilesResponseParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static AndroidFontLookupFetchAllFontFilesResponseParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(
                    data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static AndroidFontLookupFetchAllFontFilesResponseParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            AndroidFontLookupFetchAllFontFilesResponseParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new AndroidFontLookupFetchAllFontFilesResponseParams(elementsOrVersion);
                    {
                        
                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                    {
                        decoder1.readDataHeaderForMap();
                        String[] keys0;
                        org.chromium.mojo_base.mojom.ReadOnlyFile[] values0;
                        {
                            
                            org.chromium.mojo.bindings.Decoder decoder2 = decoder1.readPointer(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE, false);
                            {
                                org.chromium.mojo.bindings.DataHeader si2 = decoder2.readDataHeaderForPointerArray(org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
                                keys0 = new String[si2.elementsOrVersion];
                                for (int i2 = 0; i2 < si2.elementsOrVersion; ++i2) {
                                    
                                    keys0[i2] = decoder2.readString(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i2, false);
                                }
                            }
                        }
                        {
                            
                            org.chromium.mojo.bindings.Decoder decoder2 = decoder1.readPointer(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE, false);
                            {
                                org.chromium.mojo.bindings.DataHeader si2 = decoder2.readDataHeaderForPointerArray(keys0.length);
                                values0 = new org.chromium.mojo_base.mojom.ReadOnlyFile[si2.elementsOrVersion];
                                for (int i2 = 0; i2 < si2.elementsOrVersion; ++i2) {
                                    
                                    org.chromium.mojo.bindings.Decoder decoder3 = decoder2.readPointer(org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i2, false);
                                    values0[i2] = org.chromium.mojo_base.mojom.ReadOnlyFile.decode(decoder3);
                                }
                            }
                        }
                        result.fontFiles = new java.util.HashMap<String, org.chromium.mojo_base.mojom.ReadOnlyFile>();
                        for (int index0 = 0; index0 < keys0.length; ++index0) {
                            result.fontFiles.put(keys0[index0],  values0[index0]);
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
            
            if (this.fontFiles == null) {
                encoder0.encodeNullPointer(8, false);
            } else {
                org.chromium.mojo.bindings.Encoder encoder1 = encoder0.encoderForMap(8);
                int size0 = this.fontFiles.size();
                String[] keys0 = new String[size0];
                org.chromium.mojo_base.mojom.ReadOnlyFile[] values0 = new org.chromium.mojo_base.mojom.ReadOnlyFile[size0];
                int index0 = 0;
                for (java.util.Map.Entry<String, org.chromium.mojo_base.mojom.ReadOnlyFile> entry0 : this.fontFiles.entrySet()) {
                    keys0[index0] = entry0.getKey();
                    values0[index0] = entry0.getValue();
                    ++index0;
                }
                
                {
                    org.chromium.mojo.bindings.Encoder encoder2 = encoder1.encodePointerArray(keys0.length, org.chromium.mojo.bindings.DataHeader.HEADER_SIZE, org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
                    for (int i1 = 0; i1 < keys0.length; ++i1) {
                        
                        encoder2.encode(keys0[i1], org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i1, false);
                    }
                }
                
                {
                    org.chromium.mojo.bindings.Encoder encoder2 = encoder1.encodePointerArray(values0.length, org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE, org.chromium.mojo.bindings.BindingsHelper.UNSPECIFIED_ARRAY_LENGTH);
                    for (int i1 = 0; i1 < values0.length; ++i1) {
                        
                        encoder2.encode(values0[i1], org.chromium.mojo.bindings.DataHeader.HEADER_SIZE + org.chromium.mojo.bindings.BindingsHelper.POINTER_SIZE * i1, false);
                    }
                }
            }
        }
    }

    static class AndroidFontLookupFetchAllFontFilesResponseParamsForwardToCallback extends org.chromium.mojo.bindings.SideEffectFreeCloseable
            implements org.chromium.mojo.bindings.MessageReceiver {
        private final AndroidFontLookup.FetchAllFontFiles_Response mCallback;

        AndroidFontLookupFetchAllFontFilesResponseParamsForwardToCallback(AndroidFontLookup.FetchAllFontFiles_Response callback) {
            this.mCallback = callback;
        }

        @Override
        public boolean accept(org.chromium.mojo.bindings.Message message) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader =
                        message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                if (!header.validateHeader(FETCH_ALL_FONT_FILES_ORDINAL,
                                           org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG)) {
                    return false;
                }

                AndroidFontLookupFetchAllFontFilesResponseParams response = AndroidFontLookupFetchAllFontFilesResponseParams.deserialize(messageWithHeader.getPayload());

                mCallback.call(response.fontFiles);
                return true;
            } catch (org.chromium.mojo.bindings.DeserializationException e) {
                return false;
            }
        }
    }

    static class AndroidFontLookupFetchAllFontFilesResponseParamsProxyToResponder implements AndroidFontLookup.FetchAllFontFiles_Response {

        private final org.chromium.mojo.system.Core mCore;
        private final org.chromium.mojo.bindings.MessageReceiver mMessageReceiver;
        private final long mRequestId;

        AndroidFontLookupFetchAllFontFilesResponseParamsProxyToResponder(
                org.chromium.mojo.system.Core core,
                org.chromium.mojo.bindings.MessageReceiver messageReceiver,
                long requestId) {
            mCore = core;
            mMessageReceiver = messageReceiver;
            mRequestId = requestId;
        }

        @Override
        public void call(java.util.Map<String, org.chromium.mojo_base.mojom.ReadOnlyFile> fontFiles) {
            AndroidFontLookupFetchAllFontFilesResponseParams _response = new AndroidFontLookupFetchAllFontFilesResponseParams();

            _response.fontFiles = fontFiles;

            org.chromium.mojo.bindings.ServiceMessage _message =
                    _response.serializeWithHeader(
                            mCore,
                            new org.chromium.mojo.bindings.MessageHeader(
                                    FETCH_ALL_FONT_FILES_ORDINAL,
                                    org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG,
                                    mRequestId));
            mMessageReceiver.accept(_message);
        }
    }



}