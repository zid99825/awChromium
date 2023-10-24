// WidgetHost.java is auto generated by mojom_bindings_generator.py, do not edit


// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by:
//     mojo/public/tools/bindings/mojom_bindings_generator.py
// For:
//     third_party/blink/public/mojom/widget/platform_widget.mojom
//

package org.chromium.blink.mojom;


public interface WidgetHost extends org.chromium.mojo.bindings.Interface {



    interface Proxy extends WidgetHost, org.chromium.mojo.bindings.Interface.Proxy {
    }

    Manager<WidgetHost, WidgetHost.Proxy> MANAGER = WidgetHost_Internal.MANAGER;

    void setCursor(
org.chromium.ui.mojom.Cursor cursor);


    void updateTooltipUnderCursor(
org.chromium.mojo_base.mojom.String16 tooltipText, int textDirectionHint);


    void updateTooltipFromKeyboard(
org.chromium.mojo_base.mojom.String16 tooltipText, int textDirectionHint, org.chromium.gfx.mojom.Rect bounds);


    void clearKeyboardTriggeredTooltip(
);


    void textInputStateChanged(
org.chromium.ui.mojom.TextInputState state);


    void selectionBoundsChanged(
org.chromium.gfx.mojom.Rect anchorRect, int anchorDir, org.chromium.gfx.mojom.Rect focusRect, int focusDir, org.chromium.gfx.mojom.Rect boundingBoxRect, boolean isAnchorFirst);


    void createFrameSink(
org.chromium.mojo.bindings.InterfaceRequest<org.chromium.viz.mojom.CompositorFrameSink> compositorFrameSinkReceiver, org.chromium.viz.mojom.CompositorFrameSinkClient compositorFrameSinkClient);


    void registerRenderFrameMetadataObserver(
org.chromium.mojo.bindings.InterfaceRequest<org.chromium.cc.mojom.RenderFrameMetadataObserverClient> renderFrameMetadataObserverClientReceiver, org.chromium.cc.mojom.RenderFrameMetadataObserver renderFrameMetadataObserver);


}