package com.rainbowflavor.gorakulist.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embeddable;
import java.util.Objects;

@Getter
@ToString
@NoArgsConstructor(access = lombok.AccessLevel.PROTECTED) @AllArgsConstructor
@Embeddable
public class NetworkType {
    private Boolean k;
    private Boolean n;
    private Boolean s;
    private Boolean t;
    private Boolean a;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        NetworkType that = (NetworkType) o;
        return Objects.equals(getK(), that.getK()) && Objects.equals(getN(), that.getN()) && Objects.equals(getS(), that.getS()) && Objects.equals(getT(), that.getT()) && Objects.equals(getA(), that.getA());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getK(), getN(), getS(), getT(), getA());
    }
}
