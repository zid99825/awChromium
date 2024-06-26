
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../components/autofill/core/browser/data_model/autofill_structured_address_component.h

package org.chromium.components.autofill;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    VerificationStatus.NO_STATUS, VerificationStatus.PARSED, VerificationStatus.FORMATTED,
    VerificationStatus.OBSERVED, VerificationStatus.USER_VERIFIED, VerificationStatus.SERVER_PARSED,
    VerificationStatus.MAX_VALUE
})
@Retention(RetentionPolicy.SOURCE)
public @interface VerificationStatus {
  /**
   * No verification status assigned.
   */
  int NO_STATUS = 0;
  /**
   * The value token was parsed from a parent token.
   */
  int PARSED = 1;
  /**
   * Value was built from its subcomponents.
   */
  int FORMATTED = 2;
  /**
   * The value was observed in a form transmission.
   */
  int OBSERVED = 3;
  /**
   * The user used the autofill settings to verify and store this token.
   */
  int USER_VERIFIED = 4;
  /**
   * The token was parsed by the server.
   */
  int SERVER_PARSED = 5;
  int MAX_VALUE = SERVER_PARSED;
}
