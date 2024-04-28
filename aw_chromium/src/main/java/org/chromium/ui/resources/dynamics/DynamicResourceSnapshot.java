// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

package org.chromium.android_webview.shell.Resources.dynamics;

import android.graphics.Bitmap;
import android.graphics.Rect;

import org.chromium.android_webview.shell.Resources.Resource;
import org.chromium.android_webview.shell.Resources.statics.NinePatchData;

/** The current state of a dynamic resource. */
public class DynamicResourceSnapshot implements Resource {
    private final Bitmap mBitmap;
    private final boolean mShouldRemoveResourceOnNullBitmap;
    private final Rect mBitmapSize;
    private final long mNativeResourceId;

    public DynamicResourceSnapshot(Bitmap bitmap, boolean shouldRemoveResourceOnNullBitmap,
            Rect bitmapSize, long nativeResourceId) {
        mBitmap = bitmap;
        mShouldRemoveResourceOnNullBitmap = shouldRemoveResourceOnNullBitmap;
        mBitmapSize = bitmapSize;
        mNativeResourceId = nativeResourceId;
    }

    @Override
    public Bitmap getBitmap() {
        return mBitmap;
    }

    @Override
    public boolean shouldRemoveResourceOnNullBitmap() {
        return mShouldRemoveResourceOnNullBitmap;
    }

    @Override
    public Rect getBitmapSize() {
        return mBitmapSize;
    }

    @Override
    public NinePatchData getNinePatchData() {
        return null;
    }

    @Override
    public long createNativeResource() {
        return mNativeResourceId;
    }
}
