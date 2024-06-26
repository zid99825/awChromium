
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../content/public/browser/render_frame_host.h

package org.chromium.content_public.browser;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    LifecycleState.PENDING_COMMIT, LifecycleState.ACTIVE, LifecycleState.PRERENDERING,
    LifecycleState.IN_BACK_FORWARD_CACHE, LifecycleState.PENDING_DELETION
})
@Retention(RetentionPolicy.SOURCE)
public @interface LifecycleState {
  /**
   * RenderFrameHost is waiting for an acknowledgment from the renderer to to commit a cross-
   * RenderFrameHost navigation and swap in this RenderFrameHost. Documents are in this state from
   * WebContentsObserver::ReadyToCommitNavigation to WebContentsObserver::DidFinishNavigation.
   */
  int PENDING_COMMIT = 0;
  /**
   * RenderFrameHost committed in a primary page. Documents in this state are visible to the user.
   * ACTIVE is the most common case and the documents that have reached DidFinishNavigation will be
   * in this state (except for prerendered documents). A RenderFrameHost can also be created in this
   * state for an initial empty document when creating new root frames or new child frames on a
   * primary page. With MPArch (crbug.com/1164280), a WebContents may have multiple coexisting pages
   * (trees of documents), including a primary page (currently shown to the user), prerendered
   * pages, and/or pages in BackForwardCache, where the two latter kinds of pages may become
   * primary.
   */
  int ACTIVE = 1;
  /**
   * Prerender2: RenderFrameHost committed in a prerendered page. A RenderFrameHost can reach this
   * state after a navigation in a prerendered page, or be created in this state for an initial
   * empty document when creating new root frames or new child frames on a prerendered page.
   * Documents in this state are invisible to the user and aren't allowed to show any UI changes,
   * but the page is allowed to load and run in the background. Documents in PRERENDERING state can
   * be evicted (canceling prerendering) at any time (e.g. by calling
   * IsInactiveAndDisallowActivation).
   */
  int PRERENDERING = 2;
  /**
   * RenderFrameHost is stored in BackForwardCache. A document may be stored in BackForwardCache
   * after the user has navigated away so that the RenderFrameHost can be re-used after history
   * navigation.
   */
  int IN_BACK_FORWARD_CACHE = 3;
  /**
   * RenderFrameHost is waiting to be unloaded and deleted, and is no longer visible to the user.
   * After a cross-document navigation, the old documents are going to run unload handlers in the
   * background and will be deleted thereafter e.g. after a DidFinishNavigation in the same frame
   * for a different RenderFrameHost, up until RenderFrameDeleted. Use
   * RenderFrameHostWrapper::WaitUntilRenderFrameDelete() to wait until RenderFrameHost is deleted
   * in tests.
   */
  int PENDING_DELETION = 4;
}
