let item = false
basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) < 35 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 255)
            basic.pause(800)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 47)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        if (item == false) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 255)
            basic.pause(800)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 41)
            music.ringTone(587)
        }
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 255)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 255)
    }
})
