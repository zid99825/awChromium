// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
package org.chromium.ui.resources

import android.graphics.Bitmap
import android.graphics.Rect
import org.chromium.ui.resources.statics.NinePatchData

/**
 * A basic resource interface that all assets must use to be exposed to the CC layer as
 * UIResourceIds.
 */
interface Resource {
    /**
     * This can only be called in
     * [ResourceLoader.ResourceLoaderCallback.onResourceLoaded], where it
     * would be called exactly once per invocation, and the [Bitmap] would be deep-copied into
     * the CC layer, so it is encouraged to make sure we don't keep an extra copy at the Java side
     * unnecessarily.
     * @return A [Bitmap] representing the resource.
     */
    val bitmap: Bitmap?

    /**
     * Called when [getBitmap] returns null, if this returns true we will inform the CC layer
     * to remove this resource as its no longer correct. This can be used when the Bitmap is
     * produced asynchronously and something about the previous bitmap (like layout size) has
     * changed and the CC layer should not fall back on the stale bitmap.
     */
    fun shouldRemoveResourceOnNullBitmap(): Boolean

    /**
     * @return The size of the bitmap.
     */
    val bitmapSize: Rect?

    /**
     * Returns the nine patch data if the resource is backed by a nine patch bitmap. In all other
     * cases, this will be null.
     * @return The nine patch data for the bitmap or null.
     */
    val ninePatchData: NinePatchData?

    /**
     * Creates the native representation of this Resource. Note that the ownership is passed to the
     * caller.
     * @return The pointer to the native Resource.
     */
    fun createNativeResource(): Long
}