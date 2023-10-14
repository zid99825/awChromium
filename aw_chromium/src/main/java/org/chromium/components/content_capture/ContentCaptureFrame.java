// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

package org.chromium.components.content_capture;

import android.graphics.Rect;

import androidx.annotation.VisibleForTesting;

import org.chromium.base.annotations.CalledByNative;

/**
 * The class is Java's representative of components/content_capture/browser/content_capture_frame.h
 */
public class ContentCaptureFrame extends ContentCaptureDataBase {
    private final String mUrl;
    private final String mTitle;

    @CalledByNative
    @VisibleForTesting
    public static ContentCaptureFrame createContentCaptureFrame(
            long id, String value, int x, int y, int width, int height, String title) {
        return new ContentCaptureFrame(id, value, x, y, width, height, title);
    }

    private ContentCaptureFrame(
            long id, String value, int x, int y, int width, int height, String title) {
        super(id, new Rect(x, y, x + width, y + height));
        mUrl = value;
        mTitle = title;
    }

    public String getUrl() {
        return mUrl;
    }

    public String getTitle() {
        return mTitle;
    }

    @Override
    public String toString() {
        String sb = super.toString() + " Url:" +
                getUrl() +
                " Title:" +
                getTitle();
        return sb;
    }

    @Override
    public String getText() {
        return getTitle();
    }
}