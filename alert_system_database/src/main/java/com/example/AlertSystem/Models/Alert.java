package com.example.AlertSystem.Models;

import lombok.*;
import org.hibernate.annotations.JoinColumnOrFormula;
import org.hibernate.validator.constraints.URL;
import org.springframework.http.HttpMethod;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Objects;
import java.util.Set;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Alert<Situation> {
    @Id
    @GeneratedValue
    private Long id;

    @NotBlank(message = "name is mandotory")
    @Column(unique = true)
    private String name;

    @URL
    @NotBlank(message = "url is mandotory")
    @Column(length = 2048)
    private String url;

    @NotNull
    private HttpMethod requestName;

    @NotNull
    @Min(1)
    private Long period;

    @NotNull
    private Long timeLeft;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="situation_id")
    private List<Situation> situations;

}
