export function encode(data: { [key: string]: string }): FormData {
  const formData = new FormData();

  Object.keys(data).forEach(k => {
    formData.append(k, data[k]);
  });

  return formData;
}
