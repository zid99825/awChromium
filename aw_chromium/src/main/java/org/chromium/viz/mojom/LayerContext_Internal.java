// LayerContext_Internal.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     services/viz/public/mojom/compositing/layer_context.mojom
//

package org.chromium.viz.mojom;

class LayerContext_Internal {

    public static final org.chromium.mojo.bindings.Interface.Manager<LayerContext, LayerContext.Proxy> MANAGER = new org.chromium.mojo.bindings.Interface.Manager<LayerContext, LayerContext.Proxy>() {

        @Override
        public String getName() {
            return "viz.mojom.LayerContext";
        }

        @Override
        public int getVersion() {
            return 0;
        }

        @Override
        public Proxy buildProxy(org.chromium.mojo.system.Core core, org.chromium.mojo.bindings.MessageReceiverWithResponder messageReceiver) {
            return new Proxy(core, messageReceiver);
        }

        @Override
        public Stub buildStub(org.chromium.mojo.system.Core core, LayerContext impl) {
            return new Stub(core, impl);
        }

        @Override
        public LayerContext[] buildArray(int size) {
            return new LayerContext[size];
        }
    };


    private static final int SET_TARGET_LOCAL_SURFACE_ID_ORDINAL = 0;

    private static final int SET_VISIBLE_ORDINAL = 1;

    private static final int COMMIT_ORDINAL = 2;


    static final class Proxy extends org.chromium.mojo.bindings.Interface.AbstractProxy implements LayerContext.Proxy {

        Proxy(org.chromium.mojo.system.Core core, org.chromium.mojo.bindings.MessageReceiverWithResponder messageReceiver) {
            super(core, messageReceiver);
        }


        @Override
        public void setTargetLocalSurfaceId(LocalSurfaceId id) {

            LayerContextSetTargetLocalSurfaceIdParams _message = new LayerContextSetTargetLocalSurfaceIdParams();

            _message.id = id;


            getProxyHandler().getMessageReceiver().accept(_message.serializeWithHeader(getProxyHandler().getCore(), new org.chromium.mojo.bindings.MessageHeader(SET_TARGET_LOCAL_SURFACE_ID_ORDINAL)));

        }


        @Override
        public void setVisible(boolean visible) {

            LayerContextSetVisibleParams _message = new LayerContextSetVisibleParams();

            _message.visible = visible;


            getProxyHandler().getMessageReceiver().accept(_message.serializeWithHeader(getProxyHandler().getCore(), new org.chromium.mojo.bindings.MessageHeader(SET_VISIBLE_ORDINAL)));

        }


        @Override
        public void commit(LayerTreeUpdate update) {

            LayerContextCommitParams _message = new LayerContextCommitParams();

            _message.update = update;


            getProxyHandler().getMessageReceiver().accept(_message.serializeWithHeader(getProxyHandler().getCore(), new org.chromium.mojo.bindings.MessageHeader(COMMIT_ORDINAL)));

        }


    }

    static final class Stub extends org.chromium.mojo.bindings.Interface.Stub<LayerContext> {

        Stub(org.chromium.mojo.system.Core core, LayerContext impl) {
            super(core, impl);
        }

        @Override
        public boolean accept(org.chromium.mojo.bindings.Message message) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader = message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                int flags = org.chromium.mojo.bindings.MessageHeader.NO_FLAG;
                if (header.hasFlag(org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG)) {
                    flags = flags | org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG;
                }
                if (!header.validateHeader(flags)) {
                    return false;
                }
                switch (header.getType()) {

                    case org.chromium.mojo.bindings.interfacecontrol.InterfaceControlMessagesConstants.RUN_OR_CLOSE_PIPE_MESSAGE_ID:
                        return org.chromium.mojo.bindings.InterfaceControlMessagesHelper.handleRunOrClosePipe(LayerContext_Internal.MANAGER, messageWithHeader);


                    case SET_TARGET_LOCAL_SURFACE_ID_ORDINAL: {

                        LayerContextSetTargetLocalSurfaceIdParams data = LayerContextSetTargetLocalSurfaceIdParams.deserialize(messageWithHeader.getPayload());

                        getImpl().setTargetLocalSurfaceId(data.id);
                        return true;
                    }


                    case SET_VISIBLE_ORDINAL: {

                        LayerContextSetVisibleParams data = LayerContextSetVisibleParams.deserialize(messageWithHeader.getPayload());

                        getImpl().setVisible(data.visible);
                        return true;
                    }


                    case COMMIT_ORDINAL: {

                        LayerContextCommitParams data = LayerContextCommitParams.deserialize(messageWithHeader.getPayload());

                        getImpl().commit(data.update);
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

        @Override
        public boolean acceptWithResponder(org.chromium.mojo.bindings.Message message, org.chromium.mojo.bindings.MessageReceiver receiver) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader = message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                int flags = org.chromium.mojo.bindings.MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG;
                if (header.hasFlag(org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG)) {
                    flags = flags | org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_SYNC_FLAG;
                }
                if (!header.validateHeader(flags)) {
                    return false;
                }
                switch (header.getType()) {

                    case org.chromium.mojo.bindings.interfacecontrol.InterfaceControlMessagesConstants.RUN_MESSAGE_ID:
                        return org.chromium.mojo.bindings.InterfaceControlMessagesHelper.handleRun(getCore(), LayerContext_Internal.MANAGER, messageWithHeader, receiver);


                    default:
                        return false;
                }
            } catch (org.chromium.mojo.bindings.DeserializationException e) {
                System.err.println(e);
                return false;
            }
        }
    }


    static final class LayerContextSetTargetLocalSurfaceIdParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public LocalSurfaceId id;

        private LayerContextSetTargetLocalSurfaceIdParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public LayerContextSetTargetLocalSurfaceIdParams() {
            this(0);
        }

        public static LayerContextSetTargetLocalSurfaceIdParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static LayerContextSetTargetLocalSurfaceIdParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static LayerContextSetTargetLocalSurfaceIdParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            LayerContextSetTargetLocalSurfaceIdParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new LayerContextSetTargetLocalSurfaceIdParams(elementsOrVersion);
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                    result.id = LocalSurfaceId.decode(decoder1);
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

            encoder0.encode(this.id, 8, false);
        }
    }


    static final class LayerContextSetVisibleParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public boolean visible;

        private LayerContextSetVisibleParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public LayerContextSetVisibleParams() {
            this(0);
        }

        public static LayerContextSetVisibleParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static LayerContextSetVisibleParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static LayerContextSetVisibleParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            LayerContextSetVisibleParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new LayerContextSetVisibleParams(elementsOrVersion);
                {

                    result.visible = decoder0.readBoolean(8, 0);
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

            encoder0.encode(this.visible, 8, 0);
        }
    }


    static final class LayerContextCommitParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public LayerTreeUpdate update;

        private LayerContextCommitParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public LayerContextCommitParams() {
            this(0);
        }

        public static LayerContextCommitParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static LayerContextCommitParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static LayerContextCommitParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            LayerContextCommitParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new LayerContextCommitParams(elementsOrVersion);
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                    result.update = LayerTreeUpdate.decode(decoder1);
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

            encoder0.encode(this.update, 8, false);
        }
    }


}