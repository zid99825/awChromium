
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../components/download/public/common/download_item.h

package org.chromium.components.download;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    DownloadState.IN_PROGRESS, DownloadState.COMPLETE, DownloadState.CANCELLED,
    DownloadState.INTERRUPTED, DownloadState.MAX_DOWNLOAD_STATE
})
@Retention(RetentionPolicy.SOURCE)
public @interface DownloadState {
  /**
   * Download is actively progressing.
   */
  int IN_PROGRESS = 0;
  /**
   * Download is completely finished.
   */
  int COMPLETE = 1;
  /**
   * Download has been cancelled.
   */
  int CANCELLED = 2;
  /**
   * This state indicates that the download has been interrupted.
   */
  int INTERRUPTED = 3;
  /**
   * Maximum value.
   */
  int MAX_DOWNLOAD_STATE = 4;
}