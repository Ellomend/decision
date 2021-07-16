import { Injectable } from '@nestjs/common';
import { QueryInput } from './dto/QueryInput';

@Injectable()
export class WeightService {
  getWeight(input: QueryInput): number {
    let weight = 0;
    // age
    const age = this.getAge('');
    if (age < 18) {
      weight = weight + 5;
    }

    return weight;
  }

  getAge(birthDate: string): number {
    return 10;
  }
}
