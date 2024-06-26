
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is autogenerated by
//     java_cpp_enum.py
// From
//     ../../components/autofill/core/browser/ui/popup_item_ids.h

package org.chromium.components.autofill;

import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@IntDef({
    PopupItemId.AUTOCOMPLETE_ENTRY, PopupItemId.ADDRESS_ENTRY, PopupItemId.FILL_FULL_ADDRESS,
    PopupItemId.FILL_FULL_NAME, PopupItemId.FILL_EVERYTHING_FROM_ADDRESS_PROFILE,
    PopupItemId.FILL_FULL_PHONE_NUMBER, PopupItemId.TITLE, PopupItemId.EDIT_ADDRESS_PROFILE,
    PopupItemId.DELETE_ADDRESS_PROFILE, PopupItemId.AUTOFILL_OPTIONS, PopupItemId.COMPOSE,
    PopupItemId.DATALIST_ENTRY, PopupItemId.PASSWORD_ENTRY, PopupItemId.USERNAME_ENTRY,
    PopupItemId.ALL_SAVED_PASSWORDS_ENTRY, PopupItemId.GENERATE_PASSWORD_ENTRY,
    PopupItemId.SHOW_ACCOUNT_CARDS, PopupItemId.PASSWORD_ACCOUNT_STORAGE_OPT_IN,
    PopupItemId.PASSWORD_ACCOUNT_STORAGE_OPT_IN_AND_GENERATE,
    PopupItemId.ACCOUNT_STORAGE_PASSWORD_ENTRY, PopupItemId.ACCOUNT_STORAGE_USERNAME_ENTRY,
    PopupItemId.PASSWORD_ACCOUNT_STORAGE_RE_SIGNIN, PopupItemId.PASSWORD_ACCOUNT_STORAGE_EMPTY,
    PopupItemId.CREDIT_CARD_ENTRY, PopupItemId.INSECURE_CONTEXT_PAYMENT_DISABLED_MESSAGE,
    PopupItemId.SCAN_CREDIT_CARD, PopupItemId.VIRTUAL_CREDIT_CARD_ENTRY, PopupItemId.IBAN_ENTRY,
    PopupItemId.CREATE_NEW_PLUS_ADDRESS, PopupItemId.FILL_EXISTING_PLUS_ADDRESS,
    PopupItemId.MERCHANT_PROMO_CODE_ENTRY, PopupItemId.SEE_PROMO_CODE_DETAILS,
    PopupItemId.WEBAUTHN_CREDENTIAL, PopupItemId.WEBAUTHN_SIGN_IN_WITH_ANOTHER_DEVICE,
    PopupItemId.FIELD_BY_FIELD_FILLING, PopupItemId.SEPARATOR, PopupItemId.CLEAR_FORM,
    PopupItemId.MIXED_FORM_MESSAGE, PopupItemId.MAX_VALUE
})
@Retention(RetentionPolicy.SOURCE)
public @interface PopupItemId {
  /**
   * Autocomplete suggestions.
   */
  int AUTOCOMPLETE_ENTRY = 0;
  /**
   * Autofill profile suggestions. Fill the whole for the current address. Triggered from the
   * main/root popup suggestion.
   */
  int ADDRESS_ENTRY = 1;
  /**
   * Fills all address related fields, e.g ADDRESS_HOME_LINE1, ADDRESS_HOME_HOUSE_NUMBER etc.
   */
  int FILL_FULL_ADDRESS = 2;
  /**
   * Fills all name related fields, e.g NAME_FIRST, NAME_MIDDLE, NAME_LAST etc.
   */
  int FILL_FULL_NAME = 3;
  /**
   * Same as above, however it is triggered from the subpopup. This option is displayed once the
   * users is on group filling level or field by field level. It is used as a way to allow users to
   * go back to filling the whole form. We need it as a separate id from `ADDRESS_ENTRY` because it
   * has a different UI and for logging.
   */
  int FILL_EVERYTHING_FROM_ADDRESS_PROFILE = 4;
  /**
   * When triggered from a phone number field this suggestion will fill every phone number field.
   */
  int FILL_FULL_PHONE_NUMBER = 5;
  int TITLE = 6;
  int EDIT_ADDRESS_PROFILE = 7;
  int DELETE_ADDRESS_PROFILE = 8;
  int AUTOFILL_OPTIONS = 9;
  /**
   * Compose suggestions.
   */
  int COMPOSE = 10;
  /**
   * Datalist suggestions.
   */
  int DATALIST_ENTRY = 11;
  /**
   * Password suggestions.
   */
  int PASSWORD_ENTRY = 12;
  int USERNAME_ENTRY = 13;
  int ALL_SAVED_PASSWORDS_ENTRY = 14;
  int GENERATE_PASSWORD_ENTRY = 15;
  int SHOW_ACCOUNT_CARDS = 16;
  int PASSWORD_ACCOUNT_STORAGE_OPT_IN = 17;
  int PASSWORD_ACCOUNT_STORAGE_OPT_IN_AND_GENERATE = 18;
  int ACCOUNT_STORAGE_PASSWORD_ENTRY = 19;
  int ACCOUNT_STORAGE_USERNAME_ENTRY = 20;
  int PASSWORD_ACCOUNT_STORAGE_RE_SIGNIN = 21;
  int PASSWORD_ACCOUNT_STORAGE_EMPTY = 22;
  /**
   * Payment suggestions.
   */
  int CREDIT_CARD_ENTRY = 23;
  int INSECURE_CONTEXT_PAYMENT_DISABLED_MESSAGE = 24;
  int SCAN_CREDIT_CARD = 25;
  int VIRTUAL_CREDIT_CARD_ENTRY = 26;
  int IBAN_ENTRY = 27;
  /**
   * Plus address suggestions.
   */
  int CREATE_NEW_PLUS_ADDRESS = 28;
  int FILL_EXISTING_PLUS_ADDRESS = 29;
  /**
   * Promotion suggestions.
   */
  int MERCHANT_PROMO_CODE_ENTRY = 30;
  int SEE_PROMO_CODE_DETAILS = 31;
  /**
   * Webauthn suggestions.
   */
  int WEBAUTHN_CREDENTIAL = 32;
  int WEBAUTHN_SIGN_IN_WITH_ANOTHER_DEVICE = 33;
  /**
   * Other suggestions.
   */
  int FIELD_BY_FIELD_FILLING = 34;
  int SEPARATOR = 35;
  int CLEAR_FORM = 36;
  int MIXED_FORM_MESSAGE = 37;
  int MAX_VALUE = 37;
}
