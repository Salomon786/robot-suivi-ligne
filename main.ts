function Suivre_la_ligne () {
    Position_sur_la_ligne = Rover.LineTracking()
    // je suis au centre de la ligne
    // Trop à gauche de la ligne (il faut revenir sur la droite)
    // Trop à droite de la ligne il faut revenir sur la gauche
    if (Position_sur_la_ligne == 2) {
        Rover.setALLRGB(Rover.colors(RoverColors.Green))
        Rover.Move(Vitesse_de_croisière)
    } else if (Position_sur_la_ligne == 4 || Position_sur_la_ligne == 6) {
        Rover.setALLRGB(Rover.colors(RoverColors.Red))
        Rover.MotorRunDual(Vitesse_minimale, Vitesse_maximale)
    } else if (Position_sur_la_ligne == 1 || Position_sur_la_ligne == 3) {
        Rover.setALLRGB(Rover.colors(RoverColors.Blue))
        Rover.MotorRunDual(Vitesse_maximale, Vitesse_minimale)
    }
}
let Position_sur_la_ligne = 0
let Vitesse_maximale = 0
let Vitesse_minimale = 0
let Vitesse_de_croisière = 0
basic.showIcon(IconNames.Happy)
Vitesse_de_croisière = 90
Vitesse_minimale = 15
Vitesse_maximale = 130
let arret = 0
basic.forever(function () {
    Suivre_la_ligne()
})
