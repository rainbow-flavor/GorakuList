package com.gorakulist.gorakulistserver.model;

import lombok.Data;

@Data
public class Machine {
      private Long type;
      private Long id;
      private String koName;
      private String enName;
      private Category category;
      private String company;
      private String desc;
}
