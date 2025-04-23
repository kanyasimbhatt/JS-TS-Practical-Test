type Person = {
    name: string;
    name1: string;
    isActive: boolean;
  };

  type PickByType<T, U> = {
    [K in keyof T as T[K] extends U? K : never]: T[K]
  }
  
  type StringProperties = PickByType<Person, string>;  // op { name: string, name1: string }
  type BooleanProperties = PickByType<Person, boolean>;  // op { isActive: boolean }
  type NumberProperties = PickByType<Person, number>;  // op {}