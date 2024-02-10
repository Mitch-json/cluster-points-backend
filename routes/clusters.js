module.exports = {
    C1: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      if(comp.find(x => x.name == 'eng').points >= comp.find(x => x.name == 'swa').points){
        subject1 = comp.find(x => x.name == 'eng').points
        comp = comp.filter(x => x.name != 'eng')
      }else{
        subject1 = comp.find(x => x.name == 'swa').points
        comp = comp.filter(x => x.name != 'swa')
      }
      
      const maxG2 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
  
      if(comp.find(x => x.name == 'math').points >= maxG2.points){
        subject2 = comp.find(x => x.name == 'math').points
        comp = comp.filter(x => x.name != 'math')
      }else{
        subject2 = maxG2.points
        G2 = G2.filter(x=> x.name != `${maxG2.name}`)
        
      } 
  
      const maxG3 = G3.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG3.points
      G3 = G3.filter(x=> x.name != `${maxG3.name}`)
  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C2: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      if(comp.find(x => x.name == 'eng').points >= comp.find(x => x.name == 'swa').points){
        subject1 = comp.find(x => x.name == 'eng').points
        comp = comp.filter(x => x.name != 'eng')
      }else{
        subject1 = comp.find(x => x.name == 'swa').points
        comp = comp.filter(x => x.name != 'swa')
      }

      subject2 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x => x.name != 'math')

      let G23 = G2.concat(G3)
      
      
      const maxG23 = G23.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      
      subject3 = maxG23.points
      G23 = G23.filter(x=> x.name != `${maxG23.name}`)
      
  
      let G2345 = G23.concat(G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },
    // C3 is the same as C1
    C4: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      subject1 = comp.find(x => x.name == 'math').points
      
      if(G2.find(x => x.name == 'phy')){
        subject2 = G2.find(x => x.name == 'phy').points
        G2 = G2.filter(x => x.name != 'phy')

      }else{
        return "Not Qualified"
      }
      
      if (G2.find(x => x.name == 'bio') || G2.find(x => x.name == 'chem') || G3.find(x => x.name == 'geo')) {
        if (G3.find(x => x.name == 'geo')) {
          let sub3Temp = G2.concat(G3.filter(x => x.name != 'geo'))
          const maxsub3Temp = sub3Temp.reduce((prev, current)=>{
            return (prev && prev.points > current.points) ? prev : current
          })
          subject3 = maxsub3Temp.points
          if (maxsub3Temp.name == 'geo') {
            G3 = G3.filter(x => x.name != `${maxsub3Temp.name}`)
          } else {
            G2 = G2.filter(x=> x.name != `${maxsub3Temp.name}`)
          }
        } else {
          const maxG2 = G2.reduce((prev, current)=>{
            return (prev && prev.points > current.points) ? prev : current
          })
          
          subject3 = maxG2.points
          G2 = G2.filter(x=> x.name != `${maxG2.name}`)
          
        }
        
      } else {
        return "Not Qualified"
      }
  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C5: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      if(comp.find(x => x.name == 'eng').points >= comp.find(x => x.name == 'swa').points){
        subject1 = comp.find(x => x.name == 'eng').points
        comp = comp.filter(x => x.name != 'eng')
      }else{
        subject1 = comp.find(x => x.name == 'swa').points
        comp = comp.filter(x => x.name != 'swa')
      }
      
      if(G2.find(x => x.name == 'bio')){
        subject2 = G2.find(x => x.name == 'bio').points
        G2 = G2.filter(x => x.name != 'bio')

      }else{
        return "Not Qualified"
      }
  
      const maxG3 = G3.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG3.points
      G3 = G3.filter(x=> x.name != `${maxG3.name}`)
  
      let G2345 = G2.concat(comp.filter(x => x.name == 'math'),G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C6: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      subject1 = comp.find(x => x.name == 'swa').points
      comp = comp.filter(x=> x.name != 'swa')
      
      let compG2 = comp.concat(G2)
      let maxCompG2 = compG2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })

      subject2 = maxCompG2.points

      if (G2.find(x => x.name == `${maxCompG2.name}`)) {
        G2 = G2.filter(x => x.name != `${maxCompG2.name}`)
      }

      const maxG3 = G3.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG3.points
      G3 = G3.filter(x=> x.name != `${maxG3.name}`)
      
  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C7: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      subject1 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x=> x.name != 'math')

      if (G2.find(x => x.name == 'phy')) {
        subject2 = G2.find(x => x.name == 'phy').points
        G2 = G2.filter(x=> x.name != 'phy')
        
      } else {
        return "Not Qualified"
      }

      if (G2.find(x => x.name == 'chem')) {
        subject2 = G2.find(x => x.name == 'chem').points
        G2 = G2.filter(x=> x.name != 'chem')
        
      } else {
        return "Not Qualified"
      }

  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C8: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      subject1 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x=> x.name != 'math')

      if (G2.find(x => x.name == 'phy')) {
        subject2 = G2.find(x => x.name == 'phy').points
        G2 = G2.filter(x=> x.name != 'phy')
        
      } else {
        return "Not Qualified"
      }

      const maxG3 = G3.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG3.points
      G3 = G3.filter(x=> x.name != `${maxG3.name}`)

  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C9: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      subject1 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x=> x.name != 'math')

      if (G2.find(x => x.name == 'phy')) {
        subject2 = G2.find(x => x.name == 'phy').points
        G2 = G2.filter(x=> x.name != 'phy')
        
      } else {
        return "Not Qualified"
      }

      const maxG2 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      const maxG3 = G3.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      if (maxG2.points >= maxG3.points) {
        subject3 = maxG2.points
        G2 = G2.filter(x=> x.name != `${maxG2.name}`)
      } else {
        subject3 = maxG3.points
        G3 = G3.filter(x=> x.name != `${maxG3.name}`)
      }

  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C10: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      subject1 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x=> x.name != 'math')

      if (G2.find(x => x.name == 'bio')) {
        subject2 = G2.find(x => x.name == 'bio').points
        G2 = G2.filter(x=> x.name != 'bio')
        
      } else {
        return "Not Qualified"
      }

      const maxG2 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG2.points
      G2 = G2.filter(x=> x.name != `${maxG2.name}`)

  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C11: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      subject1 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x=> x.name != 'math')

      const maxG2 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject2 = maxG2.points
      G2 = G2.filter(x=> x.name != `${maxG2.name}`)

      const maxG22 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG22.points
      G2 = G2.filter(x=> x.name != `${maxG22.name}`)

  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C12: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      subject1 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x=> x.name != 'math')

      const maxG2 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject2 = maxG2.points
      G2 = G2.filter(x=> x.name != `${maxG2.name}`)

      const maxG3 = G3.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG3.points
      G3 = G3.filter(x=> x.name != `${maxG3.name}`)

  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C13: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G2.find(x => x.name == 'chem')) {
        subject1 = G2.find(x => x.name == 'chem').points
        G2 = G2.filter(x=> x.name != 'chem')
        
      } else {
        return "Not Qualified"
      }

      if (G2.find(x => x.name == 'phy')) {
        if (comp.find(x => x.name == 'math').points >= G2.find(x => x.name == 'phy').points) {
          subject2 = comp.find(x => x.name == 'math').points
        } else {
          subject2 = G2.find(x => x.name == 'phy').points
        }
        
      } else {
        subject2 = comp.find(x => x.name == 'math').points
      }

      if (G2.find(x => x.name == 'bio') || G4.find(x => x.name == 'hsci')) {
        if (G2.find(x => x.name == 'bio') && G4.find(x => x.name == 'hsci')) {
          if (G2.find(x => x.name == 'bio').points >= G4.find(x => x.name == 'hsci').points) {
            subject3 = G2.find(x => x.name == 'bio').points
          } else {
            subject3 = G4.find(x => x.name == 'hsci').points
            G4 = G4.filter(x=> x.name != 'hsci')
          }
        } else if (G2.find(x => x.name == 'bio')) {
          subject3 = G2.find(x => x.name == 'bio').points
        }else if (G4.find(x => x.name == 'hsci')){
          subject3 = G4.find(x => x.name == 'hsci').points
          G4 = G4.filter(x=> x.name != 'hsci')
        }
      } else {
        return "Not Qualified"
      }


      comp = comp.filter(x=> x.name != 'math')
      let GC345 = comp.concat(G3,G4,G5)
  
  
      subject4 = GC345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C14: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G2.find(x => x.name == 'bio')) {
        subject1 = G2.find(x => x.name == 'bio').points
        G2 = G2.filter(x=> x.name != 'bio')
        
      } else {
        return "Not Qualified"
      }

      subject2 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x=> x.name != 'math')

      let G23 = G2.concat(G3)
      
      const maxG23 = G23.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      
      subject3 = maxG23.points
      G23 = G23.filter(x=> x.name != `${maxG23.name}`)

      let GC2345 = comp.concat(G23,G4,G5)
  
      subject4 = GC2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C15: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G2.find(x => x.name == 'bio')) {
        subject1 = G2.find(x => x.name == 'bio').points
        G2 = G2.filter(x=> x.name != 'bio')
        
      } else {
        return "Not Qualified"
      }

      if (G2.find(x => x.name == 'chem')) {
        subject2 = G2.find(x => x.name == 'chem').points
        G2 = G2.filter(x=> x.name != 'chem')
      } else {
        return "Not Qualified"
      }

      if (G2.find(x => x.name == 'phy')) {
        if(comp.find(x => x.name == 'math').points >= G2.find(x => x.name == 'phy').points){
          subject3 = comp.find(x => x.name == 'math').points
          comp = comp.filter(x => x.name != 'math')
        }else{
          subject3 = G2.find(x => x.name == 'phy').points
          G2 = G2.filter(x=> x.name != `phy`)
          comp = comp.filter(x => x.name != 'math')
          
        } 
      } else {
        subject3 = comp.find(x => x.name == 'math').points
        comp = comp.filter(x => x.name != 'math')
      }


      let GC2345 = comp.concat(G2,G3,G4,G5)
  
      subject4 = GC2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C16: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G3.find(x => x.name == 'his')) {
        subject1 = G3.find(x => x.name == 'his').points
        G3 = G3.filter(x=> x.name != 'his')
        
      } else {
        return "Not Qualified"
      }

      if(comp.find(x => x.name == 'eng').points >= comp.find(x => x.name == 'swa').points){
        subject2 = comp.find(x => x.name == 'eng').points
        comp = comp.filter(x => x.name != 'eng')
      }else{
        subject2 = comp.find(x => x.name == 'swa').points
        comp = comp.filter(x => x.name != 'swa')
      }

      const maxG2 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
  
      if(comp.find(x => x.name == 'math').points >= maxG2.points){
        subject3 = comp.find(x => x.name == 'math').points
        comp = comp.filter(x => x.name != 'math')
      }else{
        subject3 = maxG2.points
        G2 = G2.filter(x=> x.name != `${maxG2.name}`)
        
      } 

      let G2345 = G2.concat(G3,G4,G5)
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C17: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G2.find(x => x.name == 'bio')) {
        subject1 = G2.find(x => x.name == 'bio').points
        G2 = G2.filter(x=> x.name != 'bio')
        
      } else {
        return "Not Qualified"
      }

      if (G2.find(x => x.name == 'chem')) {
        subject2 = G2.find(x => x.name == 'chem').points
        G2 = G2.filter(x=> x.name != 'chem')
      } else {
        return "Not Qualified"
      }

      if (G2.find(x => x.name == 'phy') || G3.find(x => x.name == 'geo')) {
        let math = comp.filter(x => x.name == 'math')
        let phy = []
        let geo = []
        if (G2.find(x => x.name == 'phy')) {
          phy = G2.filter(x=> x.name == 'phy')
        }
        if (G3.find(x => x.name == 'geo')) {
          geo = G3.filter(x=> x.name == 'geo')
        }
        let mpg = math.concat(phy,geo)
        const maxMpg = mpg.reduce((prev, current)=>{
          return (prev && prev.points > current.points) ? prev : current
        })

        subject3 = maxMpg.points
        comp = comp.filter(x => x.name != 'math')

        if (maxMpg.name == 'phy') {
          G2 = G2.filter(x=> x.name != 'phy')
        }
        if (maxMpg.name == 'geo') {
          G3 = G3.filter(x=> x.name != 'geo')
        }
      } else {
        subject3 = comp.find(x => x.name == 'math').points
        comp = comp.filter(x => x.name != 'math')
      }


      let GC2345 = comp.concat(G2,G3,G4,G5)
  
      subject4 = GC2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C18: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });
  
      if (G3.find(x => x.name == 'geo')) {
        subject1 = G3.find(x => x.name == 'geo').points
        G3 = G3.filter(x=> x.name != 'geo')
        
      } else {
        return "Not Qualified"
      }

      subject2 = comp.find(x => x.name == 'math').points
      comp = comp.filter(x=> x.name != 'math')

      const maxG2 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG2.points
      G2 = G2.filter(x=> x.name != `${maxG2.name}`)

  
      let G2345 = G2.concat(G3,G4,G5)
  
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C19: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G5.find(x => x.name == 'fre')) {
        subject1 = G5.find(x => x.name == 'fre').points
        G5 = G5.filter(x=> x.name != 'fre')
        
      } else {
        return "Not Qualified"
      }

      if(comp.find(x => x.name == 'eng').points >= comp.find(x => x.name == 'swa').points){
        subject2 = comp.find(x => x.name == 'eng').points
        comp = comp.filter(x => x.name != 'eng')
      }else{
        subject2 = comp.find(x => x.name == 'swa').points
        comp = comp.filter(x => x.name != 'swa')
      }

      
      let G23 = G2.concat(G3)
      
      const maxG23 = G23.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
  
      if(comp.find(x => x.name == 'math').points >= maxG23.points){
        subject3 = comp.find(x => x.name == 'math').points
        comp = comp.filter(x => x.name != 'math')
      }else{
        subject3 = maxG23.points
        G23 = G23.filter(x=> x.name != `${maxG23.name}`)
        
      } 

      let G2345 = G23.concat(G4,G5)
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C20: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G5.find(x => x.name == 'ger')) {
        subject1 = G5.find(x => x.name == 'ger').points
        G5 = G5.filter(x=> x.name != 'ger')
        
      } else {
        return "Not Qualified"
      }

      if(comp.find(x => x.name == 'eng').points >= comp.find(x => x.name == 'swa').points){
        subject2 = comp.find(x => x.name == 'eng').points
        comp = comp.filter(x => x.name != 'eng')
      }else{
        subject2 = comp.find(x => x.name == 'swa').points
        comp = comp.filter(x => x.name != 'swa')
      }

      
      let G23 = G2.concat(G3)
      
      const maxG23 = G23.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
  
      if(comp.find(x => x.name == 'math').points >= maxG23.points){
        subject3 = comp.find(x => x.name == 'math').points
        comp = comp.filter(x => x.name != 'math')
      }else{
        subject3 = maxG23.points
        G23 = G23.filter(x=> x.name != `${maxG23.name}`)
        
      } 

      let G2345 = G23.concat(G4,G5)
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C21: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G5.find(x => x.name == 'music')) {
        subject1 = G5.find(x => x.name == 'music').points
        G5 = G5.filter(x=> x.name != 'music')
        
      } else {
        return "Not Qualified"
      }

      if(comp.find(x => x.name == 'eng').points >= comp.find(x => x.name == 'swa').points){
        subject2 = comp.find(x => x.name == 'eng').points
        comp = comp.filter(x => x.name != 'eng')
      }else{
        subject2 = comp.find(x => x.name == 'swa').points
        comp = comp.filter(x => x.name != 'swa')
      }

      
      let G23 = G2.concat(G3)
      
      const maxG23 = G23.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
  
      if(comp.find(x => x.name == 'math').points >= maxG23.points){
        subject3 = comp.find(x => x.name == 'math').points
        comp = comp.filter(x => x.name != 'math')
      }else{
        subject3 = maxG23.points
        G23 = G23.filter(x=> x.name != `${maxG23.name}`)
        
      } 

      let G2345 = G23.concat(G4,G5)
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C22: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      subject1 = comp.find(x => x.name == 'eng').points
      comp = comp.filter(x => x.name != 'eng')
      
      const maxG2 = G2.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
  
      if(comp.find(x => x.name == 'math').points >= maxG2.points){
        subject2 = comp.find(x => x.name == 'math').points
        comp = comp.filter(x => x.name != 'math')
      }else{
        subject2 = maxG2.points
        G2 = G2.filter(x=> x.name != `${maxG2.name}`)
        
      } 

      let G23 = G2.concat(G3)
      
      const maxG23 = G23.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      })
      subject3 = maxG23.points
      G23 = G23.filter(x=> x.name != `${maxG23.name}`)

      let G2345 = comp.filter(x => x.name == 'swa').concat(G23,G4,G5)
  
      subject4 = G2345.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },

    C23: function(comp, G2, G3, G4, G5){
      let subject1
      let subject2
      let subject3
      let subject4
  
      const temp = comp.concat(G2,G3,G4,G5)
      let Y = 0
      temp.forEach(element => {
        Y += parseInt(element.points)
      });

      if (G3.find(x => x.name == 're')) {
        subject1 = G3.find(x => x.name == 're').points
        G3 = G3.filter(x=> x.name != 're')
        
      } else {
        return "Not Qualified"
      }

      if(comp.find(x => x.name == 'eng').points >= comp.find(x => x.name == 'swa').points){
        subject2 = comp.find(x => x.name == 'eng').points
        comp = comp.filter(x => x.name != 'eng')
      }else{
        subject2 = comp.find(x => x.name == 'swa').points
        comp = comp.filter(x => x.name != 'swa')
      }

      if (G3.length != 0) {
        subject3 = G3.reduce((prev, current)=>{
          return (prev && prev.points > current.points) ? prev : current
        }).points
      } else {
        return "Not Qualified"
      }

      let G245 = G2.concat(G4,G5)
  
      subject4 = G245.reduce((prev, current)=>{
        return (prev && prev.points > current.points) ? prev : current
      }).points
  
      let X = subject1 + subject2 + subject3 + subject4
      
      let cluster_points = Math.sqrt((X/48)*(Y/84)) * 48
      return cluster_points
      
    },
}
