package com.example.AlertSystem.Models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
class sSituation {
    @Id
    @GeneratedValue
    private Long id;
    private Integer downorup;
    private String date;

    @Column(columnDefinition = "TEXT")
    private String response;
}
