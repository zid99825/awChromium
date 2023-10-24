// UdpSocket.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     services/network/public/mojom/udp_socket.mojom
//

package org.chromium.network.mojom;

public interface UdpSocket extends org.chromium.mojo.bindings.Interface {


    interface Proxy extends UdpSocket, org.chromium.mojo.bindings.Interface.Proxy {
    }

    Manager<UdpSocket, UdpSocket.Proxy> MANAGER = UdpSocket_Internal.MANAGER;

    void bind(IpEndPoint localAddr, UdpSocketOptions socketOptions, Bind_Response callback);

    interface Bind_Response extends org.chromium.mojo.bindings.Callbacks.Callback2<Integer, IpEndPoint> {
    }


    void connect(IpEndPoint remoteAddr, UdpSocketOptions socketOptions, Connect_Response callback);

    interface Connect_Response extends org.chromium.mojo.bindings.Callbacks.Callback2<Integer, IpEndPoint> {
    }


    void setBroadcast(boolean broadcast, SetBroadcast_Response callback);

    interface SetBroadcast_Response extends org.chromium.mojo.bindings.Callbacks.Callback1<Integer> {
    }


    void setSendBufferSize(int sendBufferSize, SetSendBufferSize_Response callback);

    interface SetSendBufferSize_Response extends org.chromium.mojo.bindings.Callbacks.Callback1<Integer> {
    }


    void setReceiveBufferSize(int receiveBufferSize, SetReceiveBufferSize_Response callback);

    interface SetReceiveBufferSize_Response extends org.chromium.mojo.bindings.Callbacks.Callback1<Integer> {
    }


    void joinGroup(IpAddress groupAddress, JoinGroup_Response callback);

    interface JoinGroup_Response extends org.chromium.mojo.bindings.Callbacks.Callback1<Integer> {
    }


    void leaveGroup(IpAddress groupAddress, LeaveGroup_Response callback);

    interface LeaveGroup_Response extends org.chromium.mojo.bindings.Callbacks.Callback1<Integer> {
    }


    void receiveMore(int numAdditionalDatagrams);


    void receiveMoreWithBufferSize(int numAdditionalDatagrams, int bufferSize);


    void sendTo(IpEndPoint destAddr, org.chromium.mojo_base.mojom.ReadOnlyBuffer data, MutableNetworkTrafficAnnotationTag trafficAnnotation, SendTo_Response callback);

    interface SendTo_Response extends org.chromium.mojo.bindings.Callbacks.Callback1<Integer> {
    }


    void send(org.chromium.mojo_base.mojom.ReadOnlyBuffer data, MutableNetworkTrafficAnnotationTag trafficAnnotation, Send_Response callback);

    interface Send_Response extends org.chromium.mojo.bindings.Callbacks.Callback1<Integer> {
    }


    void close();


}