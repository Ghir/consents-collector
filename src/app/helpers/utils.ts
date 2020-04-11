import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const minSelectedValidator = (minRequired: number): ValidatorFn =>
  (control: FormGroup): ValidationErrors | null => {
    const consentsGroup = control.get('consents') as FormGroup;
    const consentsArray = getConsentsArray(consentsGroup);
    const isInvalid = consentsArray.length < minRequired;

    return isInvalid ? { minSelected: true } : null;
  };

export const getConsentsArray = (consentsGroup: FormGroup): string[] => {
  const consentsGivenArray = Object.keys(consentsGroup.value).filter((el: string) => {
    return consentsGroup.get(el).value;
  });
  return consentsGivenArray;
};
