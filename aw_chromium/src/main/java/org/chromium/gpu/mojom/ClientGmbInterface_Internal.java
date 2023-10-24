// ClientGmbInterface_Internal.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     gpu/ipc/common/client_gmb_interface.mojom
//

package org.chromium.gpu.mojom;

class ClientGmbInterface_Internal {

    public static final org.chromium.mojo.bindings.Interface.Manager<ClientGmbInterface, ClientGmbInterface.Proxy> MANAGER = new org.chromium.mojo.bindings.Interface.Manager<ClientGmbInterface, ClientGmbInterface.Proxy>() {

        @Override
        public String getName() {
            return "gpu.mojom.ClientGmbInterface";
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
        public Stub buildStub(org.chromium.mojo.system.Core core, ClientGmbInterface impl) {
            return new Stub(core, impl);
        }

        @Override
        public ClientGmbInterface[] buildArray(int size) {
            return new ClientGmbInterface[size];
        }
    };


    private static final int CREATE_GPU_MEMORY_BUFFER_ORDINAL = 0;

    private static final int DESTROY_GPU_MEMORY_BUFFER_ORDINAL = 1;

    private static final int COPY_GPU_MEMORY_BUFFER_ORDINAL = 2;


    static final class Proxy extends org.chromium.mojo.bindings.Interface.AbstractProxy implements ClientGmbInterface.Proxy {

        Proxy(org.chromium.mojo.system.Core core, org.chromium.mojo.bindings.MessageReceiverWithResponder messageReceiver) {
            super(core, messageReceiver);
        }


        @Override
        public void createGpuMemoryBuffer(org.chromium.gfx.mojom.GpuMemoryBufferId id, org.chromium.gfx.mojom.Size size, int format, int usage, SurfaceHandle surfaceHandle, CreateGpuMemoryBuffer_Response callback) {

            ClientGmbInterfaceCreateGpuMemoryBufferParams _message = new ClientGmbInterfaceCreateGpuMemoryBufferParams();

            _message.id = id;

            _message.size = size;

            _message.format = format;

            _message.usage = usage;

            _message.surfaceHandle = surfaceHandle;


            getProxyHandler().getMessageReceiver().acceptWithResponder(_message.serializeWithHeader(getProxyHandler().getCore(), new org.chromium.mojo.bindings.MessageHeader(CREATE_GPU_MEMORY_BUFFER_ORDINAL, org.chromium.mojo.bindings.MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG, 0)), new ClientGmbInterfaceCreateGpuMemoryBufferResponseParamsForwardToCallback(callback));

        }


        @Override
        public void destroyGpuMemoryBuffer(org.chromium.gfx.mojom.GpuMemoryBufferId id) {

            ClientGmbInterfaceDestroyGpuMemoryBufferParams _message = new ClientGmbInterfaceDestroyGpuMemoryBufferParams();

            _message.id = id;


            getProxyHandler().getMessageReceiver().accept(_message.serializeWithHeader(getProxyHandler().getCore(), new org.chromium.mojo.bindings.MessageHeader(DESTROY_GPU_MEMORY_BUFFER_ORDINAL)));

        }


        @Override
        public void copyGpuMemoryBuffer(org.chromium.gfx.mojom.GpuMemoryBufferHandle bufferHandle, org.chromium.mojo_base.mojom.UnsafeSharedMemoryRegion sharedMemory, CopyGpuMemoryBuffer_Response callback) {

            ClientGmbInterfaceCopyGpuMemoryBufferParams _message = new ClientGmbInterfaceCopyGpuMemoryBufferParams();

            _message.bufferHandle = bufferHandle;

            _message.sharedMemory = sharedMemory;


            getProxyHandler().getMessageReceiver().acceptWithResponder(_message.serializeWithHeader(getProxyHandler().getCore(), new org.chromium.mojo.bindings.MessageHeader(COPY_GPU_MEMORY_BUFFER_ORDINAL, org.chromium.mojo.bindings.MessageHeader.MESSAGE_EXPECTS_RESPONSE_FLAG, 0)), new ClientGmbInterfaceCopyGpuMemoryBufferResponseParamsForwardToCallback(callback));

        }


    }

    static final class Stub extends org.chromium.mojo.bindings.Interface.Stub<ClientGmbInterface> {

        Stub(org.chromium.mojo.system.Core core, ClientGmbInterface impl) {
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
                        return org.chromium.mojo.bindings.InterfaceControlMessagesHelper.handleRunOrClosePipe(ClientGmbInterface_Internal.MANAGER, messageWithHeader);


                    case DESTROY_GPU_MEMORY_BUFFER_ORDINAL: {

                        ClientGmbInterfaceDestroyGpuMemoryBufferParams data = ClientGmbInterfaceDestroyGpuMemoryBufferParams.deserialize(messageWithHeader.getPayload());

                        getImpl().destroyGpuMemoryBuffer(data.id);
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
                        return org.chromium.mojo.bindings.InterfaceControlMessagesHelper.handleRun(getCore(), ClientGmbInterface_Internal.MANAGER, messageWithHeader, receiver);


                    case CREATE_GPU_MEMORY_BUFFER_ORDINAL: {

                        ClientGmbInterfaceCreateGpuMemoryBufferParams data = ClientGmbInterfaceCreateGpuMemoryBufferParams.deserialize(messageWithHeader.getPayload());

                        getImpl().createGpuMemoryBuffer(data.id, data.size, data.format, data.usage, data.surfaceHandle, new ClientGmbInterfaceCreateGpuMemoryBufferResponseParamsProxyToResponder(getCore(), receiver, header.getRequestId()));
                        return true;
                    }


                    case COPY_GPU_MEMORY_BUFFER_ORDINAL: {

                        ClientGmbInterfaceCopyGpuMemoryBufferParams data = ClientGmbInterfaceCopyGpuMemoryBufferParams.deserialize(messageWithHeader.getPayload());

                        getImpl().copyGpuMemoryBuffer(data.bufferHandle, data.sharedMemory, new ClientGmbInterfaceCopyGpuMemoryBufferResponseParamsProxyToResponder(getCore(), receiver, header.getRequestId()));
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


    static final class ClientGmbInterfaceCreateGpuMemoryBufferParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 40;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(40, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public org.chromium.gfx.mojom.GpuMemoryBufferId id;
        public org.chromium.gfx.mojom.Size size;
        public int format;
        public int usage;
        public SurfaceHandle surfaceHandle;

        private ClientGmbInterfaceCreateGpuMemoryBufferParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public ClientGmbInterfaceCreateGpuMemoryBufferParams() {
            this(0);
        }

        public static ClientGmbInterfaceCreateGpuMemoryBufferParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static ClientGmbInterfaceCreateGpuMemoryBufferParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static ClientGmbInterfaceCreateGpuMemoryBufferParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            ClientGmbInterfaceCreateGpuMemoryBufferParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new ClientGmbInterfaceCreateGpuMemoryBufferParams(elementsOrVersion);
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                    result.id = org.chromium.gfx.mojom.GpuMemoryBufferId.decode(decoder1);
                }
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(16, false);
                    result.size = org.chromium.gfx.mojom.Size.decode(decoder1);
                }
                {

                    result.format = decoder0.readInt(24);
                    org.chromium.gfx.mojom.BufferFormat.validate(result.format);
                    result.format = org.chromium.gfx.mojom.BufferFormat.toKnownValue(result.format);
                }
                {

                    result.usage = decoder0.readInt(28);
                    org.chromium.gfx.mojom.BufferUsage.validate(result.usage);
                    result.usage = org.chromium.gfx.mojom.BufferUsage.toKnownValue(result.usage);
                }
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(32, false);
                    result.surfaceHandle = SurfaceHandle.decode(decoder1);
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

            encoder0.encode(this.size, 16, false);

            encoder0.encode(this.format, 24);

            encoder0.encode(this.usage, 28);

            encoder0.encode(this.surfaceHandle, 32, false);
        }
    }


    static final class ClientGmbInterfaceCreateGpuMemoryBufferResponseParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public org.chromium.gfx.mojom.GpuMemoryBufferHandle bufferHandle;

        private ClientGmbInterfaceCreateGpuMemoryBufferResponseParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public ClientGmbInterfaceCreateGpuMemoryBufferResponseParams() {
            this(0);
        }

        public static ClientGmbInterfaceCreateGpuMemoryBufferResponseParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static ClientGmbInterfaceCreateGpuMemoryBufferResponseParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static ClientGmbInterfaceCreateGpuMemoryBufferResponseParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            ClientGmbInterfaceCreateGpuMemoryBufferResponseParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new ClientGmbInterfaceCreateGpuMemoryBufferResponseParams(elementsOrVersion);
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                    result.bufferHandle = org.chromium.gfx.mojom.GpuMemoryBufferHandle.decode(decoder1);
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

            encoder0.encode(this.bufferHandle, 8, false);
        }
    }

    static class ClientGmbInterfaceCreateGpuMemoryBufferResponseParamsForwardToCallback extends org.chromium.mojo.bindings.SideEffectFreeCloseable implements org.chromium.mojo.bindings.MessageReceiver {
        private final ClientGmbInterface.CreateGpuMemoryBuffer_Response mCallback;

        ClientGmbInterfaceCreateGpuMemoryBufferResponseParamsForwardToCallback(ClientGmbInterface.CreateGpuMemoryBuffer_Response callback) {
            this.mCallback = callback;
        }

        @Override
        public boolean accept(org.chromium.mojo.bindings.Message message) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader = message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                if (!header.validateHeader(CREATE_GPU_MEMORY_BUFFER_ORDINAL, org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG)) {
                    return false;
                }

                ClientGmbInterfaceCreateGpuMemoryBufferResponseParams response = ClientGmbInterfaceCreateGpuMemoryBufferResponseParams.deserialize(messageWithHeader.getPayload());

                mCallback.call(response.bufferHandle);
                return true;
            } catch (org.chromium.mojo.bindings.DeserializationException e) {
                return false;
            }
        }
    }

    static class ClientGmbInterfaceCreateGpuMemoryBufferResponseParamsProxyToResponder implements ClientGmbInterface.CreateGpuMemoryBuffer_Response {

        private final org.chromium.mojo.system.Core mCore;
        private final org.chromium.mojo.bindings.MessageReceiver mMessageReceiver;
        private final long mRequestId;

        ClientGmbInterfaceCreateGpuMemoryBufferResponseParamsProxyToResponder(org.chromium.mojo.system.Core core, org.chromium.mojo.bindings.MessageReceiver messageReceiver, long requestId) {
            mCore = core;
            mMessageReceiver = messageReceiver;
            mRequestId = requestId;
        }

        @Override
        public void call(org.chromium.gfx.mojom.GpuMemoryBufferHandle bufferHandle) {
            ClientGmbInterfaceCreateGpuMemoryBufferResponseParams _response = new ClientGmbInterfaceCreateGpuMemoryBufferResponseParams();

            _response.bufferHandle = bufferHandle;

            org.chromium.mojo.bindings.ServiceMessage _message = _response.serializeWithHeader(mCore, new org.chromium.mojo.bindings.MessageHeader(CREATE_GPU_MEMORY_BUFFER_ORDINAL, org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG, mRequestId));
            mMessageReceiver.accept(_message);
        }
    }


    static final class ClientGmbInterfaceDestroyGpuMemoryBufferParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public org.chromium.gfx.mojom.GpuMemoryBufferId id;

        private ClientGmbInterfaceDestroyGpuMemoryBufferParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public ClientGmbInterfaceDestroyGpuMemoryBufferParams() {
            this(0);
        }

        public static ClientGmbInterfaceDestroyGpuMemoryBufferParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static ClientGmbInterfaceDestroyGpuMemoryBufferParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static ClientGmbInterfaceDestroyGpuMemoryBufferParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            ClientGmbInterfaceDestroyGpuMemoryBufferParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new ClientGmbInterfaceDestroyGpuMemoryBufferParams(elementsOrVersion);
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                    result.id = org.chromium.gfx.mojom.GpuMemoryBufferId.decode(decoder1);
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


    static final class ClientGmbInterfaceCopyGpuMemoryBufferParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 24;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(24, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public org.chromium.gfx.mojom.GpuMemoryBufferHandle bufferHandle;
        public org.chromium.mojo_base.mojom.UnsafeSharedMemoryRegion sharedMemory;

        private ClientGmbInterfaceCopyGpuMemoryBufferParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public ClientGmbInterfaceCopyGpuMemoryBufferParams() {
            this(0);
        }

        public static ClientGmbInterfaceCopyGpuMemoryBufferParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static ClientGmbInterfaceCopyGpuMemoryBufferParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static ClientGmbInterfaceCopyGpuMemoryBufferParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            ClientGmbInterfaceCopyGpuMemoryBufferParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new ClientGmbInterfaceCopyGpuMemoryBufferParams(elementsOrVersion);
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(8, false);
                    result.bufferHandle = org.chromium.gfx.mojom.GpuMemoryBufferHandle.decode(decoder1);
                }
                {

                    org.chromium.mojo.bindings.Decoder decoder1 = decoder0.readPointer(16, false);
                    result.sharedMemory = org.chromium.mojo_base.mojom.UnsafeSharedMemoryRegion.decode(decoder1);
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

            encoder0.encode(this.bufferHandle, 8, false);

            encoder0.encode(this.sharedMemory, 16, false);
        }
    }


    static final class ClientGmbInterfaceCopyGpuMemoryBufferResponseParams extends org.chromium.mojo.bindings.Struct {

        private static final int STRUCT_SIZE = 16;
        private static final org.chromium.mojo.bindings.DataHeader[] VERSION_ARRAY = new org.chromium.mojo.bindings.DataHeader[]{new org.chromium.mojo.bindings.DataHeader(16, 0)};
        private static final org.chromium.mojo.bindings.DataHeader DEFAULT_STRUCT_INFO = VERSION_ARRAY[0];
        public boolean success;

        private ClientGmbInterfaceCopyGpuMemoryBufferResponseParams(int version) {
            super(STRUCT_SIZE, version);
        }

        public ClientGmbInterfaceCopyGpuMemoryBufferResponseParams() {
            this(0);
        }

        public static ClientGmbInterfaceCopyGpuMemoryBufferResponseParams deserialize(org.chromium.mojo.bindings.Message message) {
            return decode(new org.chromium.mojo.bindings.Decoder(message));
        }

        /**
         * Similar to the method above, but deserializes from a |ByteBuffer| instance.
         *
         * @throws org.chromium.mojo.bindings.DeserializationException on deserialization failure.
         */
        public static ClientGmbInterfaceCopyGpuMemoryBufferResponseParams deserialize(java.nio.ByteBuffer data) {
            return deserialize(new org.chromium.mojo.bindings.Message(data, new java.util.ArrayList<org.chromium.mojo.system.Handle>()));
        }

        @SuppressWarnings("unchecked")
        public static ClientGmbInterfaceCopyGpuMemoryBufferResponseParams decode(org.chromium.mojo.bindings.Decoder decoder0) {
            if (decoder0 == null) {
                return null;
            }
            decoder0.increaseStackDepth();
            ClientGmbInterfaceCopyGpuMemoryBufferResponseParams result;
            try {
                org.chromium.mojo.bindings.DataHeader mainDataHeader = decoder0.readAndValidateDataHeader(VERSION_ARRAY);
                final int elementsOrVersion = mainDataHeader.elementsOrVersion;
                result = new ClientGmbInterfaceCopyGpuMemoryBufferResponseParams(elementsOrVersion);
                {

                    result.success = decoder0.readBoolean(8, 0);
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

            encoder0.encode(this.success, 8, 0);
        }
    }

    static class ClientGmbInterfaceCopyGpuMemoryBufferResponseParamsForwardToCallback extends org.chromium.mojo.bindings.SideEffectFreeCloseable implements org.chromium.mojo.bindings.MessageReceiver {
        private final ClientGmbInterface.CopyGpuMemoryBuffer_Response mCallback;

        ClientGmbInterfaceCopyGpuMemoryBufferResponseParamsForwardToCallback(ClientGmbInterface.CopyGpuMemoryBuffer_Response callback) {
            this.mCallback = callback;
        }

        @Override
        public boolean accept(org.chromium.mojo.bindings.Message message) {
            try {
                org.chromium.mojo.bindings.ServiceMessage messageWithHeader = message.asServiceMessage();
                org.chromium.mojo.bindings.MessageHeader header = messageWithHeader.getHeader();
                if (!header.validateHeader(COPY_GPU_MEMORY_BUFFER_ORDINAL, org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG)) {
                    return false;
                }

                ClientGmbInterfaceCopyGpuMemoryBufferResponseParams response = ClientGmbInterfaceCopyGpuMemoryBufferResponseParams.deserialize(messageWithHeader.getPayload());

                mCallback.call(response.success);
                return true;
            } catch (org.chromium.mojo.bindings.DeserializationException e) {
                return false;
            }
        }
    }

    static class ClientGmbInterfaceCopyGpuMemoryBufferResponseParamsProxyToResponder implements ClientGmbInterface.CopyGpuMemoryBuffer_Response {

        private final org.chromium.mojo.system.Core mCore;
        private final org.chromium.mojo.bindings.MessageReceiver mMessageReceiver;
        private final long mRequestId;

        ClientGmbInterfaceCopyGpuMemoryBufferResponseParamsProxyToResponder(org.chromium.mojo.system.Core core, org.chromium.mojo.bindings.MessageReceiver messageReceiver, long requestId) {
            mCore = core;
            mMessageReceiver = messageReceiver;
            mRequestId = requestId;
        }

        @Override
        public void call(Boolean success) {
            ClientGmbInterfaceCopyGpuMemoryBufferResponseParams _response = new ClientGmbInterfaceCopyGpuMemoryBufferResponseParams();

            _response.success = success;

            org.chromium.mojo.bindings.ServiceMessage _message = _response.serializeWithHeader(mCore, new org.chromium.mojo.bindings.MessageHeader(COPY_GPU_MEMORY_BUFFER_ORDINAL, org.chromium.mojo.bindings.MessageHeader.MESSAGE_IS_RESPONSE_FLAG, mRequestId));
            mMessageReceiver.accept(_message);
        }
    }


}