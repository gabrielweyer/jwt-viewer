export class JwtService {
  getJwt(value: string): Jwt {
    const firstDotOffset = value.indexOf('.');
    const lastDotOffset = value.lastIndexOf('.');

    if (firstDotOffset === -1) { return; }

    const jwtPayloadBase64 = value.substring(firstDotOffset + 1, lastDotOffset);

    const payload = atob(jwtPayloadBase64);
    const jwt = JSON.parse(payload);

    let iat: Date;
    let nbf: Date;
    let exp: Date;

    if (jwt.iat) {
      iat = this.getDateFromEpoch(jwt.iat);
    }

    if (jwt.nbf) {
      nbf = this.getDateFromEpoch(jwt.nbf);
    }

    if (jwt.exp) {
      exp = this.getDateFromEpoch(jwt.exp);
    }

    return new Jwt(payload, iat, nbf, exp);
  }

  private getDateFromEpoch(epoch: string): Date {
    return new Date(+epoch * 1000);
  }
}

export class Jwt {
  constructor(
    public readonly payload: string,
    public readonly iat: Date,
    public readonly nbf: Date,
    public readonly exp: Date
  ) {}
}
