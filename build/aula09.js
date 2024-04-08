"use strict";
// enum
var dias;
(function (dias) {
    dias[dias["domingo"] = 1] = "domingo";
    dias[dias["segunda"] = 2] = "segunda";
    dias[dias["terca"] = 3] = "terca";
    dias[dias["quarta"] = 4] = "quarta";
    dias[dias["quinta"] = 5] = "quinta";
    dias[dias["sexta"] = 6] = "sexta";
    dias[dias["sabado"] = 7] = "sabado";
})(dias || (dias = {}));
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["User"] = 10] = "User";
    tipoUsuario[tipoUsuario["Admin"] = 100] = "Admin";
    tipoUsuario[tipoUsuario["Super"] = 1000] = "Super";
})(tipoUsuario || (tipoUsuario = {}));
const t1 = 500;
const t2 = 10;
