import { SensorStatus, SensorType, Position, Sensor } from '../models';

const doorLock: Sensor = {
  id: 'door-lock',
  type: SensorType.DoorLock,
  name: 'Door Lock',
  status: SensorStatus.Normal,
  message: '',
  position: {
    lon: -82.4374762+ 0.000015,
    lat: 27.9561611 + 0.0000180,
    alt: 1.2,
  },
  related: ['access-point']
};

export interface DoorLockOptions {
  id?: string;
  type?: SensorType;
  name?: string;
  status?: SensorStatus;
  position?: Position;
  message?: string;
  related?: string[];
}

export const getDoorLock = ({id, type, name, status, message, position, related}: DoorLockOptions = {}): Sensor => ({
  id: id || doorLock.id,
  type: type || doorLock.type,
  name: name || doorLock.name,
  status: status || doorLock.status,
  message: message || doorLock.message,
  related: related || doorLock.related.slice(0),
  position: position || {
    lat: doorLock.position.lat,
    lon: doorLock.position.lon,
    alt: doorLock.position.alt
  },
});
