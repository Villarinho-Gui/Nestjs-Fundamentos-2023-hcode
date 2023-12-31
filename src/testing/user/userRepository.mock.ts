import { getRepositoryToken } from '@nestjs/typeorm';

import { userEntityList } from './userEntity.mock';
import { UserEntity } from '../../user/entity/user.entity';

export const userRepositoryMock = {
  provide: getRepositoryToken(UserEntity),
  useValue: {
    create: jest.fn(),
    save: jest.fn().mockResolvedValue(userEntityList[0]),
    find: jest.fn().mockResolvedValue(userEntityList),
    findOneBy: jest.fn().mockResolvedValue(userEntityList[0]),
    update: jest.fn().mockResolvedValue(userEntityList[0]),
    delete: jest.fn().mockResolvedValue(userEntityList[0]),
    exist: jest.fn().mockResolvedValue(true),
    findOne: jest.fn(),
  },
};
