import _ from 'lodash';
import useLocationStore from '@/stores/location';
import type { TLocation } from '../location';

interface ObjectWithLocationId {
  locationId: number
}

type TReturnValue<T> = Omit<T, 'locationId'> & {
  location: TLocation
}

function joinWithLocation<T extends ObjectWithLocationId>(
  obj: T,
  locations: TLocation[],
): TReturnValue<T> {
  const { locationId, ...newObj } = obj;
  const clonedObj = _.cloneDeep(newObj) as TReturnValue<T>;

  return {
    ...clonedObj,
    location: locations.find((item) => item.id === locationId) as TLocation,
  };
}

async function joinWithLocations<T extends ObjectWithLocationId>(
  arr: T[],
): Promise<TReturnValue<T>[]> {
  const { asyncLocations } = useLocationStore();

  const locations = await asyncLocations;

  return arr.map((item) => joinWithLocation(item, locations));
}

export default joinWithLocations;
