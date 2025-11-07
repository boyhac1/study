const database = {
    subjects: {
        'phys1':{name:"Physics 1st Paper",bn_name:"পদার্থবিজ্ঞান ১ম পত্র",chapters:[{id:'phys1_ch2',name:"All class",bn_name:"All class"}]},
      
          
          
          
          
        'phys2':{name:"Physics 2nd Paper",bn_name:"পদার্থবিজ্ঞান ২য় পত্র",chapters:[]},
        'chem1':{name:"Chemistry 1st Paper",bn_name:"রসায়ন ১ম পত্র",chapters:[]},
        'chem2':{name:"Chemistry 2nd Paper",bn_name:"রসায়ন ২য় পত্র",chapters:[]},
        'math1':{name:"Higher Math 1st Paper",bn_name:"উচ্চতর গণিত ১ম পত্র",chapters:[]},
        'math2':{name:"Higher Math 2nd Paper",bn_name:"উচ্চতর গণিত ২য় পত্র",chapters:[]},
        'bio1':{name:"Biology 1st Paper",bn_name:"জীববিজ্ঞান ১ম পত্র",chapters:[]},
        'bio2':{name:"Biology 2nd Paper",bn_name:"জীববিজ্ঞান ২য় পত্র",chapters:[]}
    },
    oneShotSubjects: {
        'phys1_oneshot': { name: "Physics 1st Paper One Shot", bn_name: "পদার্থবিজ্ঞান ১ম পত্র (ওয়ান শট)", chapters: [
            { id: 'phys1_ch2_oneshot', name: "Vector Full Chapter", bn_name: "ভেক্টর (এক ক্লাসে শেষ)"},
            { id: 'phys1_ch4_oneshot', name: "Newtonian Mechanics Full Chapter", bn_name: "নিউটনিয়ান বলবিদ্যা (এক ক্লাসে শেষ)"},
        ]},
        'phys2_oneshot': { name: "Physics 2nd Paper One Shot", bn_name: "পদার্থবিজ্ঞান ২য় পত্র (ওয়ান শট)", chapters: [
            { id: 'phys2_ch1_oneshot', name: "Thermodynamics Full Chapter", bn_name: "তাপগতিবিদ্যা (এক ক্লাসে শেষ)"},
        ]},
        'chem_oneshot': { name: "Chemistry One Shot", bn_name: "রসায়ন (ওয়ান শট)", chapters: [
            { id: 'chem_ch_qualitative_oneshot', name: "Qualitative Chemistry", bn_name: "গুণগত রসায়ন (এক ক্লাসে শেষ)"},
        ]},
        'math_oneshot': { name: "Higher Math One Shot", bn_name: "উচ্চতর গণিত (ওয়ান শট)", chapters: [
            { id: 'math_ch_matrix_oneshot', name: "Matrix & Determinants", bn_name: "ম্যাট্রিক্স ও নির্ণায়ক (এক ক্লাসে শেষ)"},
        ]},
        'bio_oneshot': { name: "Biology One Shot", bn_name: "জীববিজ্ঞান (ওয়ান শট)", chapters: [
            { id: 'bio_ch_cell_oneshot', name: "Cell & Its Structure", bn_name: "কোষ ও এর গঠন (এক ক্লাসে শেষ)"},
        ]},
    },
    videos: {
    
    
    
        'phys1_ch2_lec1': { chapterId: 'phys1_ch2', title: "Vector Class 01", youtubeId: "OZdnnFQ7l-g", instructor: { name: "Shahriar Nazim", avatar: "https://via.placeholder.com/60" }, downloads: { lectureSheet: "#" } },
        
          
        
        
           'phys1_ch2_lec2': { chapterId: 'phys1_ch2', title: "Vector Class 02", youtubeId: "mpYDxBZAg4U", instructor: { name: "Shahriar Nazim", avatar: "https://via.placeholder.com/60" }, downloads: { lectureSheet: "#" } },
        
          
        
        
           'phys1_ch2_lec3': { chapterId: 'phys1_ch2', title: "Vector Class 03", youtubeId: "cGweIyDH3Fc", instructor: { name: "Shahriar Nazim", avatar: "https://via.placeholder.com/60" }, downloads: { lectureSheet: "#" } },
        
          
      
           'phys1_ch2_lec4': { chapterId: 'phys1_ch2', title: "Vector Class 04", youtubeId: "AW61Y9QzaoE", instructor: { name: "Shahriar Nazim", avatar: "https://via.placeholder.com/60" }, downloads: { lectureSheet: "#" } },  
        
        
        'phys1_ch2_lec1': { chapterId: 'phys1_ch4', title: "Newtonian Class 01", youtubeId: "wZmm4hyT3ao", instructor: { name: "Shahriar Nazim", avatar: "https://via.placeholder.com/60" }, downloads: { lectureSheet: "#" } },
        
           'phys1_ch2_lec1': { chapterId: 'phys1_ch4', title: "Vector Class 01", youtubeId: "OZdnnFQ7l-g", instructor: { name: "Shahriar Nazim", avatar: "https://via.placeholder.com/60" }, downloads: { lectureSheet: "#" } },
        
        
      
        'phys1_ch2_lec1': { chapterId: 'phys1_ch2', title: "Newtonian Class 01", youtubeId: "wZmm4hyT3ao", instructor: { name: "Shahriar Nazim", avatar: "https://via.placeholder.com/60" }, downloads: { lectureSheet: "#" } },
        
        
   
           
        
        'phys1_ch2_oneshot_video': { chapterId: 'phys1_ch2_oneshot', title: "ভেক্টর (One Shot)", youtubeId: "6eW-p_1x3aE", slideUrl: "#", instructor: { name: "On Stage Education", avatar: "https://via.placeholder.com/60" } },
        'phys1_ch4_oneshot_video': { chapterId: 'phys1_ch4_oneshot', title: "নিউটনিয়ান বলবিদ্যা (One Shot)", youtubeId: "bLuT522j2Lo", slideUrl: "#", instructor: { name: "On Stage Education", avatar: "https://via.placeholder.com/60" } },
        'phys2_ch1_oneshot_video': { chapterId: 'phys2_ch1_oneshot', title: "তাপগতিবিদ্যা (One Shot)", youtubeId: "fGigtTEB-dI", slideUrl: "#", instructor: { name: "Sparkle", avatar: "https://via.placeholder.com/60" } },
        'chem_ch_qualitative_oneshot_video': { chapterId: 'chem_ch_qualitative_oneshot', title: "গুণগত রসায়ন (One Shot)", youtubeId: "T1hP3gA4b84", slideUrl: "#", instructor: { name: "Chem Time", avatar: "https://via.placeholder.com/60" } },
        'math_ch_matrix_oneshot_video': { chapterId: 'math_ch_matrix_oneshot', title: "ম্যাট্রিক্স ও নির্ণায়ক (One Shot)", youtubeId: "x0bCFTRX3yE", slideUrl: "#", instructor: { name: "Shadhin Ahmed", avatar: "https://via.placeholder.com/60" } },
        'bio_ch_cell_oneshot_video': { chapterId: 'bio_ch_cell_oneshot', title: "কোষ ও এর গঠন (One Shot)", youtubeId: "wDqQk1a2YQM", slideUrl: "#", instructor: { name: "Biology Haters", avatar: "https://via.placeholder.com/60" } },
    }
};
