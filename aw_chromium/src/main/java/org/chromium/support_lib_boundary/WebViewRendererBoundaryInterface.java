// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

package org.chromium.support_lib_boundary;

/**
 * Boundary interface for WebViewRenderer.
 */
public interface WebViewRendererBoundaryInterface extends IsomorphicObjectBoundaryInterface {
    boolean terminate();
}
