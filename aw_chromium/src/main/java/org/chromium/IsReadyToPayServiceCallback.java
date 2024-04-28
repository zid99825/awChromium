/*
 * This file is auto-generated.  DO NOT MODIFY.
 */
package org.chromium;
/**
 * Helper interface to report back whether the
 * payment app is ready for payment.
 */
public interface IsReadyToPayServiceCallback extends android.os.IInterface
{
  /** Default implementation for IsReadyToPayServiceCallback. */
  public static class Default implements org.chromium.IsReadyToPayServiceCallback
  {
    /**
     * Method to be called by the Service to indicate
     * whether the payment app is ready for payment.
     * 
     * @param isReadyToPay Whether payment app is ready to pay.
     */
    @Override public void handleIsReadyToPay(boolean isReadyToPay) throws android.os.RemoteException
    {
    }
    @Override
    public android.os.IBinder asBinder() {
      return null;
    }
  }
  /** Local-side IPC implementation stub class. */
  public static abstract class Stub extends android.os.Binder implements org.chromium.IsReadyToPayServiceCallback
  {
    /** Construct the stub at attach it to the interface. */
    public Stub()
    {
      this.attachInterface(this, DESCRIPTOR);
    }
    /**
     * Cast an IBinder object into an org.chromium.IsReadyToPayServiceCallback interface,
     * generating a proxy if needed.
     */
    public static org.chromium.IsReadyToPayServiceCallback asInterface(android.os.IBinder obj)
    {
      if ((obj==null)) {
        return null;
      }
      android.os.IInterface iin = obj.queryLocalInterface(DESCRIPTOR);
      if (((iin!=null)&&(iin instanceof org.chromium.IsReadyToPayServiceCallback))) {
        return ((org.chromium.IsReadyToPayServiceCallback)iin);
      }
      return new org.chromium.IsReadyToPayServiceCallback.Stub.Proxy(obj);
    }
    @Override public android.os.IBinder asBinder()
    {
      return this;
    }
    @Override public boolean onTransact(int code, android.os.Parcel data, android.os.Parcel reply, int flags) throws android.os.RemoteException
    {
      java.lang.String descriptor = DESCRIPTOR;
      if (code >= android.os.IBinder.FIRST_CALL_TRANSACTION && code <= android.os.IBinder.LAST_CALL_TRANSACTION) {
        data.enforceInterface(descriptor);
      }
      switch (code)
      {
        case INTERFACE_TRANSACTION:
        {
          reply.writeString(descriptor);
          return true;
        }
      }
      switch (code)
      {
        case TRANSACTION_handleIsReadyToPay:
        {
          boolean _arg0;
          _arg0 = (0!=data.readInt());
          this.handleIsReadyToPay(_arg0);
          break;
        }
        default:
        {
          return super.onTransact(code, data, reply, flags);
        }
      }
      return true;
    }
    private static class Proxy implements org.chromium.IsReadyToPayServiceCallback
    {
      private android.os.IBinder mRemote;
      Proxy(android.os.IBinder remote)
      {
        mRemote = remote;
      }
      @Override public android.os.IBinder asBinder()
      {
        return mRemote;
      }
      public java.lang.String getInterfaceDescriptor()
      {
        return DESCRIPTOR;
      }
      /**
       * Method to be called by the Service to indicate
       * whether the payment app is ready for payment.
       * 
       * @param isReadyToPay Whether payment app is ready to pay.
       */
      @Override public void handleIsReadyToPay(boolean isReadyToPay) throws android.os.RemoteException
      {
        android.os.Parcel _data = android.os.Parcel.obtain();
        try {
          _data.writeInterfaceToken(DESCRIPTOR);
          _data.writeInt(((isReadyToPay)?(1):(0)));
          boolean _status = mRemote.transact(Stub.TRANSACTION_handleIsReadyToPay, _data, null, android.os.IBinder.FLAG_ONEWAY);
        }
        finally {
          _data.recycle();
        }
      }
    }
    static final int TRANSACTION_handleIsReadyToPay = (android.os.IBinder.FIRST_CALL_TRANSACTION + 0);
  }
  public static final java.lang.String DESCRIPTOR = "org.chromium.IsReadyToPayServiceCallback";
  /**
   * Method to be called by the Service to indicate
   * whether the payment app is ready for payment.
   * 
   * @param isReadyToPay Whether payment app is ready to pay.
   */
  public void handleIsReadyToPay(boolean isReadyToPay) throws android.os.RemoteException;
}
