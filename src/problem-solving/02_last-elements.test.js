import { getLastNumbers } from './02_last-elements.js';

describe('last-elements', () => {
  const payload = {
    data: 25,
    next: {
      data: 34,
      next: {
        data: 67,
        next: {
          data: 98,
          next: {
            data: 89,
            next: {
              data: 78,
              next: {
                data: 43,
                next: {
                  data: 44,
                  next: {
                    data: 36,
                    next: {
                      data: 22,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };

  it('getting last 3 data from the ', () => {
    expect(getLastNumbers(payload, 3)).toEqual([44, 36, 22]);
  });

  it('getting last 0 data from the ', () => {
    expect(getLastNumbers(payload, 0)).toEqual([]);
  });

  it('getting last 1 data from the ', () => {
    expect(getLastNumbers(payload, 1)).toEqual([22]);
  });

  it('getting last 10 data from the ', () => {
    expect(getLastNumbers(payload, 10)).toEqual([25, 34, 67, 98, 89, 78, 43, 44, 36, 22]);
  });

  it('getting last 15 data from the ', () => {
    expect(getLastNumbers(payload, 15)).toEqual([25, 34, 67, 98, 89, 78, 43, 44, 36, 22]);
  });
});
