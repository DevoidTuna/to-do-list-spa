type SnackbarTypes = {
  visible?: boolean;
  message: string;
  timeout: number;
  type: 'success' | 'info' | 'warning' | 'error';
};

export default SnackbarTypes

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $snackbar: {
      show(
        message: string,
        type: 'success' | 'info' | 'warning' | 'error',
        timeout?: number
      ): void;
      fromAxiosResponse(response: unknown): void;
    };
  }
}
